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

// Sample data
// const products = [
//   {
//     title: "Serene Geometry",
//     image:
//       "https://img.freepik.com/premium-vector/girl-skirt-walks-dances-garden-fig-trees-ripe-figs-leaves-trees_1294209-10.jpg",
//     like: 12,
//     description: "A calming blend of shapes and symmetry.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Sunset Tones",
//     image:
//       "https://img.freepik.com/premium-vector/flat-illustration-summertime-season_23-2150320849.jpg",
//     like: 15,
//     description: "Warm hues mimicking a sunset.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Bold Silence",
//     image:
//       "https://img.freepik.com/free-vector/hand-drawn-person-playing-padel-illustration_23-2149208677.jpg?t=st=1745120859~exp=1745124459~hmac=20cd427ed378085f8db5da459ba33b895971a8005bba6987b42ed0f6f016c658",
//     like: 9,
//     description: "Striking color blocks that speak in silence.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Linear Mood",
//     image:
//       "https://img.freepik.com/premium-vector/art-nouveau-design_23-2151489329.jpg",
//     like: 17,
//     description: "Monochrome lines with rhythmic flow.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Muted Blues",
//     image:
//       "https://img.freepik.com/premium-vector/flat-illustration-springtime-season_23-2151245524.jpg",
//     like: 8,
//     description: "Soft blue tones in a dreamy arrangement.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Shapes in Motion",
//     image:
//       "https://img.freepik.com/premium-vector/galloping-free_1324823-23667.jpg",
//     like: 20,
//     description: "A minimalist take on abstract motion.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Echoes of White",
//     image:
//       "https://img.freepik.com/free-vector/flat-summer-night-illustration-with-beach-view-moon_23-2149427442.jpg",
//     like: 11,
//     description: "White space that resonates depth.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Circle Language",
//     image: "https://example.com/images/circle-language.jpg",
//     like: 16,
//     description: "Circles as the language of simplicity.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Neon Whisper",
//     image:
//       "https://img.freepik.com/premium-vector/flat-autumn-celebration-illustration_23-2149533357.jpg",
//     like: 14,
//     description: "Soft neon tones in minimal strokes.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Monochrome Pulse",
//     image:
//       "https://img.freepik.com/premium-vector/tropical-mural-wallpaper_23-2148691695.jpg",
//     like: 13,
//     description: "Black and white harmony at its peak.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Fragmented Calm",
//     image:
//       "https://img.freepik.com/free-vector/hand-drawn-tropical-sunset-background_23-2150672384.jpg",
//     like: 10,
//     description: "Fragments of peace blended together.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Silhouettes of Light",
//     image:
//       "https://img.freepik.com/free-vector/flat-illustration-earth-day-celebration_23-2151310908.jpg",
//     like: 18,
//     description: "Contrast of dark and light shapes.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Frozen Rhythm",
//     image:
//       "https://img.freepik.com/premium-vector/from-distance-nebula-appeared-as-soft-ethereal-mist-as-drone-flew-closer-it_216520-28982.jpg",
//     like: 7,
//     description: "A rhythmic flow captured in ice tones.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Echo Grid",
//     image:
//       "https://img.freepik.com/premium-vector/geometric-cactus-shapes-vector-illustration_865091-23083.jpg?",
//     like: 19,
//     description: "A grid-based visual echo chamber.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
//   {
//     title: "Clouded Edges",
//     image:
//       "https://img.freepik.com/premium-vector/camping-area-landscape-with-tent-lake_23-2148677011.jpg",
//     like: 21,
//     description: "Soft edges with a cloudy essence.",
//     category: "minimalistic",
//     artist: "6800f2214a4dafcced760b4a",
//   },
// ];

// // Controller function to insert products
// export const insertArtProducts = asynHandler(async (req, res) => {
//   const created = await Product.insertMany(products);
//   res.status(201).json({
//     message: "Products inserted successfully!",
//     count: created.length,
//     data: created,
//   });
// });
