import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api.slice";
import pcBuilderReducer from "./features/pc-builder/pcbuilder.slice";
import userReducer from "./features/user/user.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pcBuilder: pcBuilderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
