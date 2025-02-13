import { Link } from "react-router-dom";
import { useAllSellerProductQuery, useDeleteProductMutation } from "../../redux/api/productApiSlice";
import { useSelector } from "react-redux";
import {toast} from "react-toastify"

const ProductList = () => {
  const { userInfo } = useSelector((state) => state.auth);
  
  // Fetch all seller products
  const { data, refetch } = useAllSellerProductQuery(userInfo._id);

  // Mutation hook for deleting a product
  const [deleteProduct] = useDeleteProductMutation();

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap(); // Call the mutation
      refetch(); // Refresh product list after deletion
      toast.success("product delete ")
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {data?.map((product) => (
            <li key={product._id} className="flex items-center justify-between p-4">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.productName}
                className="w-16 h-16 object-cover rounded-md"
              />

              {/* Product Name */}
              <span className="flex-1 ml-4 font-medium">{product.productName}</span>

              {/* Edit Button */}
              <Link
                to={`/createPortfolio/edit/${product._id}`}
                className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Edit
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(product._id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 ml-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;

