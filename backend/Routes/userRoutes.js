import { Router } from "express";
import {
  createUser,
  loginUser,
  logoutUser,
    getCurrentUserProfile,
    updateCurrentUserProfile,
} from "../Controllers/userControllers.js";
import { authenticate } from "../Middleware/authMiddleware.js";

const router = Router();

router.route("/").post(createUser);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutUser);

router.route("/profile").get(authenticate, getCurrentUserProfile)
.put(authenticate,updateCurrentUserProfile)

export default router;
