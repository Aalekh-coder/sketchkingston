import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";
import cloudinary from "cloudinary";
import User from "../Models/userModel.js";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dlwk5nufp",
  api_key: process.env.CLOUDINARY_API_KEY || "175682587185291",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "oCYyKZA3Bw7V4_bymBVj4LMqqsM",
});

export const addProduct = asyncHandler(async (req, res) => {
  try {
    const { productName, description, price, category, productSellerId } =
      req.fields;
    const { image } = req.files;

    // Validation
    if (!productName)
      return res.status(400).json({ error: "Product name is required" });
    if (!description)
      return res.status(400).json({ error: "Description is required" });
    if (!price) return res.status(400).json({ error: "Price is required" });
    if (!category)
      return res.status(400).json({ error: "Category is required" });
    if (!productSellerId)
      return res.status(400).json({ error: "Product seller ID is required" });
    if (!image) return res.status(400).json({ error: "Image is required" });

    // Upload image to Cloudinary
    const uploadResult = await cloudinary.v2.uploader.upload(image.path, {
      folder: "products",
    });

    // Create new product
    const product = new Product({
      productName,
      description,
      price,
      category,
      productSellerId,
      image: uploadResult.secure_url,
    });

    // Save product to the database
    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the product" });
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { productName, description, price, category } = req.fields;
  const { image } = req.files; // Extracting image file from form-data

  // Find the product by ID
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Update product fields
  if (productName) product.productName = productName;
  if (description) product.description = description;
  if (price) product.price = price;
  if (category) product.category = category;

  // If there's a new image, upload it to Cloudinary
  if (image) {
    const uploadResult = await cloudinary.v2.uploader.upload(image.path, {
      folder: 'products',
    });
    product.image = uploadResult.secure_url;
  }

  // Save the updated product
  const updatedProduct = await product.save();

  res.status(200).json(updatedProduct);
});
export const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    } else {
      console.error(error);
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Product not found" });
  }
});


export const removeProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({  message: "Product remove successfully",product});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export const allProducts = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find().limit(10).sort({ createAt: -1 });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
