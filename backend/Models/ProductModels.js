import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["home-decore", "flat-art", "minimalistic", "vector-art"],
      required: true,
    },
    artist: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
