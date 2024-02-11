import { Router } from "express";
import { extend } from "lodash";
import User from "../models/user.model";
import {
  hasAuthorization,
  requireSignin,
} from "../middlewares/auth.middleware";

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      let users = await User.find().select("name email updatedAt createdAt");
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error });
    }
  })
  .post(async (req, res, next) => {
    const user = new User(req.body);
    try {
      await user.save();
      return res.json({
        message: "Successfully signed up!",
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

router.param("userId", async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.profile = user;
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router
  .route("/:userId")
  .get(requireSignin, async (req, res) => {
    req.profile.hashedPassword = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
  })
  .put(requireSignin, hasAuthorization, async (req, res) => {
    try {
      let user = req.profile;
      user = extend(user, req.body);
      await user.save();
      user.hashedPassword = undefined;
      user.salt = undefined;
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error });
    }
  })
  .delete(requireSignin, hasAuthorization, async (req, res) => {
    try {
      let deletedUser = await User.findByIdAndDelete(req.profile._id).select(
        "-salt -hashedPassword"
      );
      return res.json(deletedUser);
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

export default router;
