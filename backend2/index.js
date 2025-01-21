// this is new backend 


import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./Routes/userRoutes.js"
import productRoutes from "./Routes/productRoutes.js"
import categoryRoutes from "./Routes/categoryRoutes.js"

import connectDb from "./Config/db.js";

dotenv.config();

connectDb();

const app = express();
const Port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes)



app.listen(Port, () => console.log("server running on port 😎", Port));
