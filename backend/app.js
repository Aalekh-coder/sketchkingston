import cookieParser from "cookie-parser";
import { json, urlencoded } from "express";
import express from "express";
import { PORT } from "./Config/env.js";
import userRouter from "./Routes/UserRoute.js";
import connectDB from "./Config/db.js"
import cors from "cors"
import productRouter from "./Routes/ProductRoute.js";
// import { insertArtProducts } from "./Controllers/productController.js";
import { app, server } from "./socket/socket.js";
import messageRoute from "./Routes/messageRoute.js"


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

app.get("/", (req, res) => {
    res.send("hello to the skechkingston")
})



server.listen(PORT, async (params) => {
    await connectDB()
 console.log(`server running on port http://localhost:${PORT}`);   
})