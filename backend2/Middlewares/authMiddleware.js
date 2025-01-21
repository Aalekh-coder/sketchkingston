import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import asyncHandler from "express-async-handler";

export const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
        res.status(401);       
        throw new Error("Not authorized, no token")
    }
  } else {
      res.status(401);
      throw new Error("Not authorized, no token")
  }
});

export const authorizedAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401).send("Not authorized as an seller");
    }
  };
export const authorizedSeller = (req, res, next) => {
    if (req.user && req.user.isSeller) {
      next();
    } else {
      res.status(401).send("Not authorized as an seller");
    }
  };
