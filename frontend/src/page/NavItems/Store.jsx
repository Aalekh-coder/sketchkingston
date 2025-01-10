import ArtNotFound from "../../components/ProductNotFound";
import { useAllProductOfSellerQuery } from "../../redux/api/productApiSlice"
import { Link } from "react-router-dom"

const Store = () => {
  const { data, isLoading } = useAllProductOfSellerQuery();
  console.log(data)
  // const color = ["red","blue","green","slate","orange","amber","yellow","lime","emerald","teal","cyan","indigo","violet","fuchsia","purple","pink","rose"]


  return (
    <div className="px-10 py-10 flex gap-5 flex-wrap">
      {isLoading
        ? Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="h-[50vh] w-[20vw] overflow-hidden bg-gray-200 rounded-xl animate-pulse"
          >
            <div className="h-3/5 bg-gray-300 rounded-xl"></div>
            <div className="px-5 mt-2">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/4"></div>
            </div>
            <div className="mx-5 mt-2 h-6 bg-gray-300 rounded w-1/4"></div>
          </div>
        ))
        : data?.length === 0 ? <ArtNotFound/> : data?.map((e) => (
          <Link
            to={e._id}
            key={e._id}
            className="h-[50vh] w-[20vw] overflow-hidden bg-rose-400 rounded-xl hover:h-[52vh] hover:w-[21vw] duration-200"
          >
            <img
              src={e.image}
              alt={e.productName}
              className="p-1 rounded-xl h-3/5 object-cover"
            />
            <p className="px-5 font-bold">{e.productName}</p>
            <p className="px-5 font-sm">{e.description.split(" ").slice(0, 5).join(" ")}...</p>
            <p className="px-5 font-medium">₹ {e.price}</p>
            <p className="mx-5 px-3 bg-red-500 inline-block rounded-2xl">
              {e.category}
            </p>
            <p className="">{e.sellerName}</p>
          </Link>
        ))}
    </div>
  )
}

export default Store