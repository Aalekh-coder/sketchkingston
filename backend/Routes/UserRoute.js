import { Router } from "express";
import { login, register, logout } from "../Controllers/userController.js";

const userRouter = Router();

userRouter.post("/login",login)
userRouter.post("/register",register)
userRouter.post("/logout", logout)

export default userRouter

