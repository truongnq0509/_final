import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
	reducerPath: "productApi",
	tagTypes: ["LIST"],
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080",
	}),
	endpoints: ({ query, mutation }) => ({
		getAll: query({
			query: () => "products",
			providesTags: ["LIST"],
		}),
		getSingle: query({
			query: (payload) => `products/${payload}`,
		}),
		createProduct: mutation({
			query: (payload) => ({
				url: "products",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["LIST"],
		}),
		updateProduct: mutation({
			query: (payload) => ({
				url: "products/" + payload?.id,
				method: "PUT",
				body: {
					...payload?.product,
				},
			}),
			invalidatesTags: ["LIST"],
		}),
		deleteProduct: mutation({
			query: (payload) => ({
				url: "products/" + payload,
				method: "DELETE",
			}),
			invalidatesTags: ["LIST"],
		}),
	}),
});

export { productApi };
export const {
	useCreateProductMutation,
	useDeleteProductMutation,
	useGetAllQuery,
	useGetSingleQuery,
	useUpdateProductMutation,
} = productApi;
