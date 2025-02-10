import { useState } from "react";
import { toast } from "react-toastify";
import { useAddProductMutation } from "../../redux/api/productApiSlice";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import BtnLoader from "../../Components/BtnLoader"

const ProductCreate = () => {
  const [productName, setProductName] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const [addProduct,{isLoading}] = useAddProductMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { _id } = userInfo;


  const submitHandler = async (e) => {
    e.preventDefault();

    if (!productName || !orderBy || !review || !image) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("orderBy", orderBy);
      formData.append("review", review);
      formData.append("image", image);
      formData.append("artist", _id);

      const { productData } = await addProduct(formData);



      if (productData?.error) {
        toast.error("Product creation failed. Try again.");
      } else {
        toast.success(`${productName} is created`);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Product creation failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-zinc-900 px-4 py-10">
      <div className="w-full max-w-6xl bg-zinc-700 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-white mb-6">Create Product</h2>
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Product Name */}
            <div>
              <label htmlFor="productName" className="block text-lg font-medium text-gray-300">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-500 bg-zinc-800 text-white text-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Order By */}
            <div>
              <label htmlFor="orderBy" className="block text-lg font-medium text-gray-300">
                Order By
              </label>
              <input
                type="text"
                id="orderBy"
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-500 bg-zinc-800 text-white text-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter order by"
                required
              />
            </div>

            {/* Review */}
            <div>
              <label htmlFor="review" className="block text-lg font-medium text-gray-300">
                Review
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-500 bg-zinc-800 text-white text-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="2"
                placeholder="Enter product review"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-lg font-medium text-gray-300">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                className="mt-2 block w-full text-lg text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"
                accept="image/*"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white text-lg py-3 px-6 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isLoading? <BtnLoader/> :"Create Product"}
              </button>
            </div>
          </form>
        </div>

        {/* Image Preview Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center bg-gray-50 border border-gray-200 rounded-lg p-4">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
          ) : (
            <p className="text-gray-500 text-center">Image preview will appear here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
