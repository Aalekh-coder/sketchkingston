import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";
import { JWT_SECRET } from "../Config/env.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decode = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decode?.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not auth not token");
    }
  }
});

export default authenticate