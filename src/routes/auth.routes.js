import { Router } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user.model";

const router = Router();

router.post("/signin", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user && user.authenticate(req.body.password)) {
      const token = jwt.sign({ _id: user._id }, config.jwtSecret);
      res.cookie("t", token, { expires: new Date(Date.now() + 600000) }); // time delta in ms
      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else res.status(401).json({ error: "Email and Password don't match" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.get("/signout", async (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "signed out" });
});

export default router;
