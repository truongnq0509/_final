import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/_auth";
import { productApi } from "../api/_product";

const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, productApi.middleware]),
});

export default store;
