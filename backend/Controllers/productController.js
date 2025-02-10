import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";
import cloudinary from "cloudinary";
import User from "../Models/userModel.js"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dlwk5nufp",
  api_key: process.env.CLOUDINARY_API_KEY || "175682587185291",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "oCYyKZA3Bw7V4_bymBVj4LMqqsM",
});

export const addProduct = asyncHandler(async (req, res) => {
  try {
    const { productName, orderBy, review, artist } = req.fields;
    const { image } = req.files;

    if (!productName || !orderBy || !artist || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const uploadResult = await cloudinary.v2.uploader.upload(image.path, {
      folder: "products",
    });

    const newProduct = new Product({
      productName,
      orderBy,
      review,
      artist,
      image: uploadResult.secure_url,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "product created Successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export const products = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find().limit(10);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(501).json({
      success: false,
      message: "product not found",
    });
  }
});
export const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(501).json({
      success: false,
      message: "product not found",
    });
  }
});
export const productUpdateById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.fields, ...req.files },
      { new: true }
    );

    await product.save();

    res.status(201).json({
      success: true,
      message: "product updated Successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(501).json({
      success: false,
      message: "product not found",
    });
  }
});
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({
      _id: req.params.id,
    }).select("productName");
    res.status(201).json({
      success: true,
      message: "product delete Successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(501).json({
      success: false,
      message: "product not found",
    });
  }
});

export const allProductOfSeller = asyncHandler(async (req,res) => {
  try {
    const product = await Product.find({artist:req.params.id});

    if (!product) {
      res.status(501).json({
        success: false,
        message: "product not found",
      });
    }

    res.status(201).json(product)
    console.log(product);
  } catch (error) {
    console.error(error)
    res.status(501).json({
      success: false,
      message: "something went wrong",
    });
  }
})
