import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";
import asyncHandle from "./asyncHandler.js";

export const authenticate = asyncHandle(async (req, res, next) => {
  let token;
  // read jwt from the jwt cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

  export const isSeller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401).send("Not authorized as an seller");
  }
};
