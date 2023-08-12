import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080",
	}),
	endpoints: ({ query, mutation }) => ({
		signin: mutation({
			query: (payload) => ({
				url: "login",
				method: "POST",
				body: payload,
			}),
		}),
		signup: mutation({
			query: (payload) => ({
				url: "register",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export { authApi };
export const { useSigninMutation, useSignupMutation } = authApi;
