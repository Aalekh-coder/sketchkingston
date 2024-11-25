import User from "../Model/userModel.js";
import asyncHandler from "../Middleware/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../Utils/createToken.js";

export const createUser = asyncHandler(async (req, res) => {
  const { username, password, email, isSeller } = req.body;
  if (!username || !password || !email ) {
    throw new Error("Please fill all the input");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).send("User already existing");
    return;
  }
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
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      isSeller: newUser.isSeller,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invaild user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
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
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isSeller: existingUser.isSeller,
      });
      return;
    }
  }
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ message: "Logout Successfully" })
});

export const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isSeller: user.isSeller,
    });
  }else{
    res.status(404);
    throw new Error("User not found")
  }
})

export const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.password = req.body.password || user.password;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword; 
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isSeller: updatedUser.isSeller
    });
  }else{
    res.status(404);
    throw new Error("User not found")
  }
})