import cloudinary from "cloudinary";

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.secure_url,
      publicId: result.publicId
    }
  } catch (error) {
    console.error("Error while upload to cloudinary", error);
    throw new Error("Error while upload to cloudinary")
  }
}

export default uploadToCloudinary;
