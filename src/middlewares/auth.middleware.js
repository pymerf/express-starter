import { expressjwt } from "express-jwt";
import config from "../config";

export const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
});

export const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (authorized) next();
  else return res.status(403).json({ error: "User is not authorized" });
};
