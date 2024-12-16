import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateProductMutation, useUploadProductImageMutation } from "../../redux/api/productApiSlice"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct] = useCreateProductMutation()

  const { userInfo } = useSelector((state) => state.auth)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("productName", productName)
      productData.append("description", description)
      productData.append("image", image)
      productData.append("price", price)
      productData.append("category", category)
      productData.append("productSellerId", userInfo._id)

      const { data } = await createProduct(productData);

      if (data.error) {
        toast.error("product create failed2. try again");
      } else {
        toast.success(`${data.productName} is created`);
        navigate("/")
      }

    } catch (error) {
      console.error(error);
      console.log(error)
      toast.error("Product create failed. try again.")
    }
  }


  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0])

    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
      setImageUrl(res.image)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className="container flex">
      <div className="flex">
        <div className="w-[50vw]">
          <div className="bg-yellow-200 flex flex-col w-[50vw] h-[85vh] rounded-xl">
            <h2 className="font-bold text-center text-4xl mt-5 mb-5">Create product</h2>
            <div action="" className="flex flex-col gap-3 mx-auto">
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="name">Product Name</label>
                <input id="name" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="description">Desciption</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-lg" htmlFor="price">Price</label>
                <input id="price" type="number" className="border rounded-lg px-5 py-2 text-yellow-700" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label className="text-lg" htmlFor="Category">Product Category</label>
                <input id="Category" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="image">{image ? image.name : "upload image"}</label>
                <input name="image" accept="image/*" id="image" type="file" className="border rounded-lg px-5 py-2 bg-white" onChange={uploadFileHandler} />
              </div>
              <button className="bg-yellow-400 py-3 rounded-lg font-bold" onClick={handleSubmit}>Create Product</button>
            </div>
          </div>
        </div >
        <div className="w-[40vw] m-10">
          <div className="">
            {imageUrl && (
              <div className="ml-5">
                <img
                  src={imageUrl}
                  alt="product"
                  className="rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct