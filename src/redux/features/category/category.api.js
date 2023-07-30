import { apiSlice } from "@/redux/api/api.slice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
