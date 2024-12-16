import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Utiles
import connectDb from "./Config/db.js";

// Routes
import userRoutes from "./Routes/userRoutes.js";
import productRoute from "./Routes/productRoutes.js"
import uploadRoute from "./Routes/uploadRoutes.js"


dotenv.config();

const port = process.env.PORT || 5000;

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/upload", uploadRoute)

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => console.log("server running on port 😘"));