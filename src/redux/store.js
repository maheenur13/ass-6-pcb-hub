import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pc-builder/pcbuilder.slice";
import userReducer from "./features/user/user.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pcBuilder: pcBuilderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
