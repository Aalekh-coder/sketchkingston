import cookieParser from "cookie-parser";
import { json, urlencoded } from "express";
import { PORT } from "./Config/env.js";
import userRouter from "./Routes/UserRoute.js";
import connectDB from "./Config/db.js"
import cors from "cors"
import productRouter from "./Routes/ProductRoute.js";
import { app, server } from "./socket/socket.js";
import messageRoute from "./Routes/messageRoute.js"
import Product from "./Models/ProductModels.js";


// const app = express();


app.use(json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    cors({
      origin:"http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

app.use("/api/users", userRouter)
app.use("/api/products", productRouter);
app.use("/api/message", messageRoute);





// app.use("/api/testingData",insertArtProducts)

// app.post("/insetData", async(req, res) => {
//   // const products = [
//   //   {
//   //     title: "Serene Geometry",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/girl-skirt-walks-dances-garden-fig-trees-ripe-figs-leaves-trees_1294209-10.jpg",
//   //     like: 12,
//   //     description: "A calming blend of shapes and symmetry.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Sunset Tones",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/flat-illustration-summertime-season_23-2150320849.jpg",
//   //     like: 15,
//   //     description: "Warm hues mimicking a sunset.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Bold Silence",
//   //     image:
//   //       "https://img.freepik.com/free-vector/hand-drawn-person-playing-padel-illustration_23-2149208677.jpg?t=st=1745120859~exp=1745124459~hmac=20cd427ed378085f8db5da459ba33b895971a8005bba6987b42ed0f6f016c658",
//   //     like: 9,
//   //     description: "Striking color blocks that speak in silence.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Linear Mood",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/art-nouveau-design_23-2151489329.jpg",
//   //     like: 17,
//   //     description: "Monochrome lines with rhythmic flow.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Muted Blues",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/flat-illustration-springtime-season_23-2151245524.jpg",
//   //     like: 8,
//   //     description: "Soft blue tones in a dreamy arrangement.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Shapes in Motion",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/galloping-free_1324823-23667.jpg",
//   //     like: 20,
//   //     description: "A minimalist take on abstract motion.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Echoes of White",
//   //     image:
//   //       "https://img.freepik.com/free-vector/flat-summer-night-illustration-with-beach-view-moon_23-2149427442.jpg",
//   //     like: 11,
//   //     description: "White space that resonates depth.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Circle Language",
//   //     image: "https://example.com/images/circle-language.jpg",
//   //     like: 16,
//   //     description: "Circles as the language of simplicity.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Neon Whisper",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/flat-autumn-celebration-illustration_23-2149533357.jpg",
//   //     like: 14,
//   //     description: "Soft neon tones in minimal strokes.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Monochrome Pulse",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/tropical-mural-wallpaper_23-2148691695.jpg",
//   //     like: 13,
//   //     description: "Black and white harmony at its peak.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Fragmented Calm",
//   //     image:
//   //       "https://img.freepik.com/free-vector/hand-drawn-tropical-sunset-background_23-2150672384.jpg",
//   //     like: 10,
//   //     description: "Fragments of peace blended together.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Silhouettes of Light",
//   //     image:
//   //       "https://img.freepik.com/free-vector/flat-illustration-earth-day-celebration_23-2151310908.jpg",
//   //     like: 18,
//   //     description: "Contrast of dark and light shapes.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Frozen Rhythm",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/from-distance-nebula-appeared-as-soft-ethereal-mist-as-drone-flew-closer-it_216520-28982.jpg",
//   //     like: 7,
//   //     description: "A rhythmic flow captured in ice tones.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Echo Grid",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/geometric-cactus-shapes-vector-illustration_865091-23083.jpg?",
//   //     like: 19,
//   //     description: "A grid-based visual echo chamber.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   //   {
//   //     title: "Clouded Edges",
//   //     image:
//   //       "https://img.freepik.com/premium-vector/camping-area-landscape-with-tent-lake_23-2148677011.jpg",
//   //     like: 21,
//   //     description: "Soft edges with a cloudy essence.",
//   //     category: "minimalistic",
//   //     artist: "6800f2214a4dafcced760b4a",
//   //   },
//   // ];
//   const products = [
//     // Home-Decore Category
//     {
//       title: "Rustic Charm",
//       image: "https://i.pinimg.com/736x/fe/34/35/fe343579f4a44aa46134621a75bf14a3.jpg",
//       like: 15,
//       description: "A cozy blend of rustic and modern decor.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Modern Elegance",
//       image: "https://i.pinimg.com/736x/a4/84/2c/a4842ce3c442f21c7d53305afaa89b5e.jpg",
//       like: 20,
//       description: "Sleek and elegant decor for modern homes.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Vintage Vibes",
//       image: "https://i.pinimg.com/736x/1c/0b/c2/1c0bc21b7bd7750d1370f7529897397c.jpg",
//       like: 18,
//       description: "Timeless vintage decor for a classic touch.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Nature's Touch",
//       image: "https://i.pinimg.com/736x/fa/48/52/fa48527a9a50964ad79fb2bea8c299be.jpg",
//       like: 22,
//       description: "Decor inspired by the beauty of nature.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Minimalist Haven",
//       image: "https://i.pinimg.com/736x/1c/a7/59/1ca7594e09170283948b363863206797.jpg",
//       like: 17,
//       description: "Simple and clean decor for a minimalist lifestyle.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Urban Jungle",
//       image: "https://i.pinimg.com/736x/4d/01/b1/4d01b190ccbbb38426a324e7ee35bb73.jpg",
//       like: 19,
//       description: "Bring the outdoors inside with lush greenery.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Coastal Breeze",
//       image: "https://i.pinimg.com/736x/87/7b/c9/877bc993734fd711eb0322aaccc9e3ab.jpg",
//       like: 21,
//       description: "Relaxing coastal-inspired decor.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Industrial Chic",
//       image: "https://i.pinimg.com/736x/b2/f9/4a/b2f94aa5f7a503efc4f6f1ccfd116f66.jpg",
//       like: 16,
//       description: "Bold industrial decor with a modern twist.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Bohemian Bliss",
//       image: "https://i.pinimg.com/736x/fb/6b/c5/fb6bc563a0be96e7a113d972421685e8.jpg",
//       like: 14,
//       description: "Free-spirited bohemian decor for creative souls.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Scandinavian Simplicity",
//       image: "https://i.pinimg.com/736x/ae/7e/d8/ae7ed8af8756841b74379ad135cd9cb4.jpg",
//       like: 23,
//       description: "Clean and functional Scandinavian decor.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Art Deco Revival",
//       image: "https://i.pinimg.com/736x/2c/95/c7/2c95c7f1f7431dc39856d1d41b603017.jpg",
//       like: 12,
//       description: "Glamorous art deco decor for a luxurious feel.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Farmhouse Warmth",
//       image: "https://i.pinimg.com/736x/8f/e3/9c/8fe39cc99d8d4b4e8814e7cf5d56e785.jpg",
//       like: 18,
//       description: "Warm and inviting farmhouse-style decor.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Eclectic Fusion",
//       image: "https://i.pinimg.com/736x/c4/d8/4e/c4d84e0d2d62e141e70998a21b2012f4.jpg",
//       like: 20,
//       description: "A mix of styles for a unique and personal touch.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Zen Retreat",
//       image: "https://i.pinimg.com/736x/40/e0/30/40e03080be3d9b03f32c7954cb9e4c13.jpg",
//       like: 25,
//       description: "Peaceful and calming decor for a zen-like atmosphere.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Mid-Century Modern",
//       image: "https://i.pinimg.com/736x/56/c1/7c/56c17cdf6c1a22cd37eb25bb243700ac.jpg",
//       like: 22,
//       description: "Iconic mid-century modern decor for timeless appeal.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Mid-Century Modern",
//       image: "https://i.pinimg.com/736x/1c/58/ac/1c58acdd1f5e7b53e1f96ca99dd3ee19.jpg",
//       like: 22,
//       description: "Iconic mid-century modern decor for timeless appeal.",
//       category: "home-decore",
//       artist: "6800f2214a4dafcced760b4a",
//     },
  
//     // Flat-Art Category
//     {
//       title: "Abstract Dreams",
//       image: "https://i.pinimg.com/736x/ee/47/ea/ee47eabce22a75ceb8bc69bf809eb13d.jpg",
//       like: 19,
//       description: "Abstract flat art with vibrant colors.",
//       category: "flat-art",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Geometric Harmony",
//       image: "https://i.pinimg.com/736x/e0/9f/80/e09f8079997beb8dc39a39ef406dbde2.jpg",
//       like: 21,
//       description: "Flat art with geometric patterns and symmetry.",
//       category: "flat-art",
//       artist: "6800f2214a4dafcced760b4a",
//     },
//     {
//       title: "Nature's Palette",
//       image: "https://i.pinimg.com/736x/a7/44/c9/a744c9dd22d6a6b010f963f1e1a4413d.jpg",
//       like: 17,
//       description: "Flat art inspired by the colors of nature.",
//       category: "flat-art",
//       artist: "6800f2214a4dafcced760b4a",
//     },
    
//   ];

//     const created = await Product.insertMany(products);
//     res.status(201).json({
//       message: "Products inserted successfully!",
//       count: created.length,
//       data: created,
//     });
//   });



app.get("/", (req, res) => {
    res.send("hello to the skechkingston")
})



server.listen(PORT, async (params) => {
    await connectDB()
 console.log(`server running on port http://localhost:${PORT}`);   
})