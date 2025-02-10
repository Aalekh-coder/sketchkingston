import { Schema, model } from "mongoose";
const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    orderBy: { type: String, required: true },
    review: { type: String, required: true },
    image: { type: String, required: true },
    artist: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"User"
    }
  },
  { timestamps: true }
);
const Product = model("Product", productSchema);
export default Product;
