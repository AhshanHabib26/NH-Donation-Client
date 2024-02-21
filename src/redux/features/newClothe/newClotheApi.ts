import { baseApi } from "../../api/baseApi";

const newClotheApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewData: builder.mutation({
      query: (data) => ({
        url: "/clothes-data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["newClotheData"],
    }),
    getAllNewData: builder.query({
      query: () => "/clothes-data",
      providesTags: ["newClotheData"],
    }),
  }),
});

export const { useCreateNewDataMutation, useGetAllNewDataQuery} = newClotheApi;
