import { useGetArtByCategoryQuery } from "@/store/api/productApiSlice";
import { Heart } from "lucide-react";
import { useLocation } from "react-router";

const VectorArt = () => {
  const location = useLocation()
  const { data: products } = useGetArtByCategoryQuery(location.pathname.split("/")[2]);

  return (
    <div className="p-6">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {products?.map((img, index) => (
          <div key={index} className="relative mb-4 group overflow-hidden rounded-lg">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              {/* Heart icon */}
              <Heart
                className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-1 w-7 h-7 bg-opacity-50 z-10"
              />
              {/* Image */}
              <img
                src={img?.image}
                alt={`Gallery ${index}`}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VectorArt