import { baseApi } from "../../api/baseApi";

const clotheApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClothes: builder.query({
      query: () => "/clothes",
      providesTags: ["Clothes"],
    }),
    getSingleClothes: builder.query({
      query: (id) => `/clothes/${id}`,
    }),
    createClothes: builder.mutation({
      query: (data) => ({
        url: "/clothes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Clothes"],
    }),
  }),
});

export const {
  useGetAllClothesQuery,
  useGetSingleClothesQuery,
  useCreateClothesMutation,
} = clotheApi;
