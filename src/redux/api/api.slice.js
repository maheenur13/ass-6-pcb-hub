import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pcb-hub-back.onrender.com/api/v1`,
  }),

  endpoints: () => ({}),
});
