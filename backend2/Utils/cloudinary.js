import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.config({
    cloud_name: "dlwk5nufp",
    api_key: "175682587185291",
    api_secret: "oCYyKZA3Bw7V4_bymBVj4LMqqsM",
});
  
const storage = new multer.memoryStorage();

export const imageUploadUtil = async(file) => {
  const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto"
      });
      return result
}

export const upload = multer({ storage })
