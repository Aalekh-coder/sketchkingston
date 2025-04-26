import asynHandler from "express-async-handler";
import Product from "../Models/ProductModels.js";
import { imageUploadUtil } from "../utils/cloudinary.js";

export const uploadArt = asynHandler(async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
});

export const createProduct = asynHandler(async (req, res) => {
  try {
    const { title, image, like, description, category, artist } = req.body;
    if (!title && !description && !category && !artist) {
      res.status(401).json({
        message: "please fill all details",
        success: false,
      });
      return;
    }

    const newProduct = new Product({
      title,
      image,
      like,
      description,
      category,
      artist,
    });
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured while creating the new product",
    });
  }
});
export const updateProduct = asynHandler(async (req,res) => {
  try {
    const { title, image, like, description, category, artist } = req.body;
    if (!title || !description || !category || !artist) {
      res.status(401).json({
        message: "please fill all details",
        success: false,
      });
      return;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        image,
        like,
        description,
        category,
        artist,
      },
      { new: true }
    );

    await product.save();
    res.status(200).json({
      message: "product update successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});
export const getAllProduct = asynHandler(async (req, res) => {
  try {
    const product = await Product.find().sort({ createAt: -1 });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "product not found" });
  }
});


export const getAllProductByCategory = asynHandler(async (req, res) => {
  try {
    const { category } = req.params; // Get category from request parameters

    // Find products that match the given category
    const products = await Product.find({ category }).sort({ createdAt: -1 });

    if (!products.length) {
      return res.status(404).json({ message: "No products found for this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export const getProductById = asynHandler(async (req,res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(product) {
      return res.json(product)
    }else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});

export const deleteProduct = asynHandler(async (req, res) => {
  try {
    const deleteProduct = await Product.findOneAndDelete(req.params.id);
    if (!deleteProduct) {
      res.status(404).res.json({
        message: "product id not found"
      })
        
    }
    res.status(200).json({
      message: "product delete successfully",
      success: true,
      deleteProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


export const sellerArts = asynHandler(async (req, res) => {
  try {
    const product = await Product.find({artist:req.params.sellerId}).sort({ createAt: -1 });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "product not found" });
  }
})



