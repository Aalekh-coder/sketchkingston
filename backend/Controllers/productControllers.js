import asyncHandler from "../Middleware/asyncHandler.js";
import Product from "../Model/productModel.js";

export const addProduct = asyncHandler(async (req, res) => {
  try {
    const {
      productName,
      description,
      image,
      productSellerId,
      price,
      category,
      reviews,
    } = req.fields;

    //vaildity
    switch (true) {
      case !productName:
        res.json({ error: "productName is required" });
      case !description:
        res.json({ error: "description is required" });
      case !image:
        res.json({ error: "image is required" });
      case !productSellerId:
        res.json({ error: "productSellerId is required" });
      case !price:
        res.json({ error: "price is required" });
      case !category:
        res.json({ error: "category is required" });
    }
    const product = new Product({ ...req.fields });
    await product.save();
    res.json(product);
    return;
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

export const udpateProductDetails = asyncHandler(async (req, res) => {
  try {
    const {
      productName,
      description,
      image,
      productSellerId,
      price,
      category,
    } = req.fields;

    if (
      productName ||
      description ||
      image ||
      productSellerId ||
      price ||
      category
    ) {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { ...req.fields },
        { new: true }
      );

      const productRes = await product.save();
      return res.json(productRes);
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(400).json(error.message);
  }
});

export const removeProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export const allProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find();
    res.status(201).json(product)
  } catch (error) {
    console.error(error);
    res.status(404).json({error:"Product not found"})
  }
})



export const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else { 
      res.status(404);
      throw new Error("product not found");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(404).json({ error: "product not found" });
  }
});

export const addProductReview = asyncHandler(async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already Reviewed")
      }

      const review = {
        name: req.user.username,
        rating: Number(rating),
        comment,
        user:req.user.id
      }

      product.reviews.push(review)
      product.numReviews = product.reviews.length

      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Reviews added" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});
