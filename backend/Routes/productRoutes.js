import { Router } from "express";
import formidable from "express-formidable";
import {
  authenticate,
  authorizedSeller,
} from "../Middlewares/authMiddleware.js";
import {
  addProduct,
  products,
  productUpdateById,
  deleteProduct,
  getProductById,
  allProductOfSeller
} from "../Controllers/productController.js";

const router = Router();

router
  .route("/")
  .get(products)
  .post(authenticate, authorizedSeller, formidable(), addProduct);

router
  .route("/:id")
  .get(authenticate, getProductById)
  .put(authenticate, authorizedSeller, formidable(), productUpdateById)
  .delete(authenticate, authorizedSeller, deleteProduct);

  router.route("/seller/:id").get(authenticate, authorizedSeller, allProductOfSeller)

export default router;
