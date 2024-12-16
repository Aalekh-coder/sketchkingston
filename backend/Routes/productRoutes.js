import { Router } from "express";
import formidable from "express-formidable";
const router = Router();

import { authenticate, isSeller } from "../Middleware/authMiddleware.js";

import checkId from "../Middleware/checkId.js";

import {
  addProduct,
  addProductReview,
  allProduct,
  getProductById,
  removeProduct,
  udpateProductDetails,
} from "../Controllers/productControllers.js";

router.route("/").post(authenticate, isSeller, formidable(), addProduct).get(allProduct);

router.route("/:id/reviews").post(authenticate,checkId,addProductReview)
// router.route("/:id/products").get(authenticate,isSeller,sellerArtGallery)

router
  .route("/:id")
  .put(authenticate, isSeller, formidable(), udpateProductDetails)
    .delete(authenticate, isSeller, removeProduct)
  .get(authenticate, isSeller, getProductById)

export default router;
