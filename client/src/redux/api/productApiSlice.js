import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),
    allProduct: builder.query({
      query: () => `${PRODUCT_URL}`,
    }),
    updateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "PUT",
        body: formData,
      }),
    }),
    productById: builder.query({
      query: (productId) => `${PRODUCT_URL}/${productId}`,
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
      providesTags: ["Product"],
    }),

    allSellerProduct: builder.query({
      query: (productId) =>`${PRODUCT_URL}/seller/${productId}`
    })
  }),
});

export const {
  useAddProductMutation,
  useAllProductQuery,
  useUpdateProductMutation,
  useProductByIdQuery,
  useDeleteProductMutation,
  useAllSellerProductQuery
} = productApiSlice;
