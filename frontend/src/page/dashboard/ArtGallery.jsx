// import { FaRegEdit } from "react-icons/fa";
// import { useAllProductOfSellerQuery } from "../../redux/api/productApiSlice"
// import { useRef, useState } from "react";
// import { useSelector } from "react-redux";

// const ArtGallery = () => {
//   const { data } = useAllProductOfSellerQuery();
//   const [toggleDetails, setToggleDetails] = useState(false);
//   const seleteProduct = useRef(null)

//   const handleChange = (e) => {
//     setToggleDetails(prev => !prev)
//     seleteProduct.current = e
//   }

//   const { userInfo } = useSelector((state) => state.auth);
//   console.log(userInfo._id);

//   const practice = data.filter((id) => id.productSellerId == userInfo._id)
//   console.log(practice);

//   return (
//     <div className="container">
//       {
//         toggleDetails ? <div className="container flex">
//           <div className="flex">
//             <div className="w-[50vw]">
//               <div className="bg-yellow-200 flex flex-col w-[50vw] h-[85vh] rounded-xl">
//                 <h2 className="font-bold text-center text-4xl mt-5 mb-5">Create product</h2>
//                 <div action="" className="flex flex-col gap-3 mx-auto">
//                   <div className="flex flex-col">
//                     <label className="text-lg" htmlFor="name">Product Name</label>
//                     <input id="name" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" value={seleteProduct?.productName} onChange={(e) => setDataProductName(e.target.value)} />
//                   </div>
//                   <div className="flex flex-col">
//                     <label className="text-lg" htmlFor="description">Desciption</label>
//                     <textarea value={dataDescription} onChange={(e) => setDataDescription(e.target.value)} id="description" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" ></textarea>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-lg" htmlFor="price">Price</label>
//                     <input id="price" type="number" className="border rounded-lg px-5 py-2 text-yellow-700" value={dataPrice} onChange={(e) => setDataPrice(e.target.value)} />
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-lg" htmlFor="Category">Product Category</label>
//                     <input id="Category" type="text" className="border rounded-lg px-5 py-2 text-yellow-700" value={dataCategory} onChange={(e) => setDataCategory(e.target.value)} />
//                   </div>
//                   {/* <div className="flex flex-col">
//                           <label className="text-lg" htmlFor="image">{image ? image.name : "upload image"}</label>
//                           <input name="image" accept="image/*" id="image" type="file" className="border rounded-lg px-5 py-2 bg-white" onChange={uploadFileHandler} />
//                         </div> */}
//                   <button className="bg-yellow-400 py-3 rounded-lg font-bold">Edit Product</button>
//                 </div>
//               </div>
//             </div >
//             {/* <div className="w-[40vw] m-10">
//                     <div className="">
//                       {imageUrl && (
//                         <div className="ml-5">
//                           <img
//                             src={imageUrl}
//                             alt="product"
//                             className="rounded-xl"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div> */}
//           </div>
//         </div>
//           :
//           <>

//             <p className="font-bold text-4xl text-center">Your art gallery <span className="bg-emerald-500 px-3 text-xl rounded-full text-white">{data?.filter((id) => id.productSellerId == userInfo._id).length}</span></p>
//             <div className=" flex justify-between text-lg mt-10 font-semibold mx-5">
//               <p>Create At</p>
//               <p>Title</p>
//               <p>Description</p>
//               <p>Category</p>
//               <p>price</p>
//               <div>Edit</div>
//             </div>
//             {
//               data?.filter((id) => id.productSellerId == userInfo._id).map((e) => (
//                 <div key={e.createdAt} className="flex justify-between text-lg mt-2 hover:text-xl">
//                   <p className="w-[10rem] ml-5">{new Date(e.createdAt).toLocaleDateString("en-US", {
//                     day: "2-digit",
//                     month: "2-digit",
//                     year: "2-digit",
//                   })}</p>
//                   <p className="w-[10rem] text-left">{e.productName.split(" ").slice(0, 1).join(" ")}...</p>
//                   <p className="w-[10rem] text-center">{e.description.split(" ").slice(0, 1).join(" ")}..</p>
//                   <p className="w-[10rem] text-right">{e.category}</p>
//                   <p className="w-[10rem] text-right">{e.price}</p>
//                   <p className="flex gap-3 w-[10rem] items-center justify-end mr-5">
//                     <div

//                       onClick={() => handleChange(e)}>
//                       <FaRegEdit className="text-blue-600 hover:text-blue-400" size={25} />
//                     </div>
//                   </p>
//                 </div>
//               ))}
//           </>
//       }

//     </div>
//   )
// }

// export default ArtGallery