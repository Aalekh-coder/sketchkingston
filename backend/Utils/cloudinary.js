// import cloudinary from "cloudinary";
// import multer from "multer"

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dlwk5nufp",
//   api_key: process.env.CLOUDINARY_API_KEY || "175682587185291",
//   api_secret: process.env.CLOUDINARY_API_SECRET || "oCYyKZA3Bw7V4_bymBVj4LMqqsM"
// });

// const storage = new multer.memoryStorage();

// export const imageUploadImage = async (file) => {
//     const result = await cloudinary.upload(file, {
//         resource_type:"auto"
//     })
//     return result
// }

// export const upload = multer({ storage });

import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
