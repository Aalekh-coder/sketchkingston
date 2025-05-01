import { Router } from "express";
import { login, register, logout, getOtherUsers } from "../Controllers/userController.js";

const userRouter = Router();

userRouter.post("/login",login)
userRouter.post("/register",register)
userRouter.post("/logout", logout);

// chat
userRouter.get("/other-users",getOtherUsers)

export default userRouter

