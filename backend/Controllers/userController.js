import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

export const register = asyncHandler(async (req, res) => {
  const { username, email, password, isSeller } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    isSeller,
  });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      success: true,
      message: "Register successfully",
      data: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isSeller: newUser.isSeller,
      },
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);

      res.status(201).json({
        success: true,
      message: "Register successfully",
      data: {
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isSeller: existingUser.isSeller,
      },
      });
      return;
    }
  }
});

export const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});
