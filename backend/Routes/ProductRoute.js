import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductByCategory,
  getProductById,
  sellerArts,
  updateProduct,
  uploadArt,
} from "../Controllers/productController.js";
import { upload } from "../utils/cloudinary.js";

const productRouter = Router();

productRouter.post("/upload-image", upload.single("my_file"), uploadArt);

productRouter.route("/").post(createProduct).get(getAllProduct);

productRouter
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

productRouter.route("/art/:sellerId").get(sellerArts);

productRouter.get("/category/:category", getAllProductByCategory);

export default productRouter;
