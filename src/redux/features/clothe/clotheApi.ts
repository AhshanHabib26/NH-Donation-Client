import { baseApi } from "../../api/baseApi";

const clotheApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClothes: builder.query({
      query: () => "/clothes",
      providesTags: ["Clothes"],
    }),
    getSingleClothes: builder.query({
      query: (id) => `/clothes/${id}`,
      providesTags: ["Clothes"],
    }),
    createClothes: builder.mutation({
      query: (data) => ({
        url: "/clothes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Clothes"],
    }),
    updateClothes: builder.mutation({
      query: ({ id, data }) => ({
        url: `/clothes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Clothes"],
    }),
    deleteClothes: builder.mutation({
      query: (id) => ({
        url: `/clothes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Clothes"],
    }),
  }),
});

export const {
  useGetAllClothesQuery,
  useGetSingleClothesQuery,
  useCreateClothesMutation,
  useDeleteClothesMutation,
  useUpdateClothesMutation,
} = clotheApi;
