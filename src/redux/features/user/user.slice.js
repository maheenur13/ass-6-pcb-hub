import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  authModalOpen: false,
  mobileSideBar: false,
  user: {
    email: null,
    name: null,
    photo: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMobileSideBar: (state, action) => {
      state.mobileSideBar = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
    removeUser: (state, action) => {
      state.isLoggedIn = action.payload;
      state.user = initialState.user;
    },
  },
});

export const {
  setUser,
  setLoggedIn,
  removeUser,
  setAuthModalOpen,
  setMobileSideBar,
} = userSlice.actions;

export default userSlice.reducer;
