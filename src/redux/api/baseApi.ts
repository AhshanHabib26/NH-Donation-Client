import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://winter-management-backend.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Clothes", "newClotheData", "Testimonial"],
});
