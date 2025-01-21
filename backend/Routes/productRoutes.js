import { Router } from "express";
import formidable from "express-formidable";
import {
  authenticate,
  authorizedSeller,
} from "../Middlewares/authMiddleware.js";

import { addProduct, updateProduct,getProductById,removeProduct, allProducts } from "../Controllers/productController.js";

const router = Router();

router
  .route("/").get(authenticate,allProducts)
  .post(authenticate, authorizedSeller, formidable(), addProduct);


router.route("/:id").get(getProductById)
  .put(authenticate, authorizedSeller, formidable(), updateProduct)
  .delete(authenticate,authorizedSeller,removeProduct)

export default router;
