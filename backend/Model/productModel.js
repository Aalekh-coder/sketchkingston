import mongoose, { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    productSellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);
const Product = model("Product", productSchema);
export default Product;
