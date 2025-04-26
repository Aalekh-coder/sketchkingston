import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../constansts";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => PRODUCT_URL, // Fetch all products
      providesTags: ["Product"]
    }),
    getProductById: builder.query({
      query: (id) => `${PRODUCT_URL}/${id}`, // Fetch a product by ID
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    getArtistArts: builder.query({
      query: (id) => `${PRODUCT_URL}/art/${id}`, // Fetch a product by ID
      providesTags: ["Product"],
    }),
    getArtByCategory: builder.query({
      query: (category) => `${PRODUCT_URL}/category/${category}`, // Fetch a product by ID
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: PRODUCT_URL,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Product", id }],
    }),



  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetArtistArtsQuery,
  useGetArtByCategoryQuery
} = productApiSlice;