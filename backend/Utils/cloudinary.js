import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.v2.config({
  cloud_name: "drqln2yd0",
  api_key: "274897151272625",
  api_secret: "WzPl8UyhElNrQNbf4PMt4pCPX6o",
});

const storage = multer.memoryStorage();

const imageUploadUtil = async (file) => {
  const result = await cloudinary.v2.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
};

const upload = multer({ storage });

export { upload, imageUploadUtil };