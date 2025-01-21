import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getCurrentUserProfile,
  getUserById,
  loginUser,
  logoutUser,
  updateUser,
  allProdutsOfUser
} from "../Controllers/userControllers.js";
import {
  authenticate,
  authorizedAdmin,
  authorizedSeller
} from "../Middlewares/authMiddleware.js";

const router = Router();

router.route("/").post(createUser).get(authenticate,authorizedAdmin, getAllUsers);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/allProduct/:id").get(authenticate,authorizedSeller,allProdutsOfUser)

router
  .route("/profile")
  .get(authenticate, authorizedSeller,getCurrentUserProfile)
  .put(authenticate,authorizedSeller, updateUser);

router
  .route("/:id")
  .delete(authenticate, authorizedAdmin, deleteUserById)
  .get(authenticate, authorizedAdmin, getUserById)
  .put(authenticate, authorizedAdmin, updateUser);
export default router;
