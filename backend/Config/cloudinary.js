import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dlwk5nufp',
  api_key: process.env.CLOUDINARY_API_KEY || '175682587185291',
  api_secret: process.env.CLOUDINARY_API_SECRET || "oCYyKZA3Bw7V4_bymBVj4LMqqsM",
});

export default cloudinary;

