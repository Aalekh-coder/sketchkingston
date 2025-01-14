import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

//Utiles
import connectDb from "./Config/db.js";

// Routes
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/users", userRoutes);

app.listen(port, () => console.log("server running on port 😘"));
