import {useAllProductOfSellerQuery} from "../../redux/api/productApiSlice"
import {Link} from "react-router-dom"

const Store = () => {
  const { data } = useAllProductOfSellerQuery();
  console.log(data)
// const color = ["red","blue","green","slate","orange","amber","yellow","lime","emerald","teal","cyan","indigo","violet","fuchsia","purple","pink","rose"]


  return (
    <div className="px-10 py-10 flex gap-5 flex-wrap" >
      {
        data?.map((e) => (
          <Link to={e._id} key={e._id} className="h-[50vh] w-[20vw] overflow-hidden bg-rose-400 rounded-xl">
            <img src={e.image} alt={e.productName} className="p-1 rounded-xl" />
            <p className="px-5 font-bold">{e.productName}</p>
            <p className="px-5 font-sm">{e.description}</p>
            <p className="px-5 font-medium">₹ {e.price}</p>
            <p className="mx-5 px-3 bg-red-500 inline-block rounded-2xl">{e.category}</p>
            <p className="">{e.sellerName}</p>
          </Link>
        ))
       }
    </div>
  )
}

export default Store