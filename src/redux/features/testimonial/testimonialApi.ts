import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonial: builder.query({
      query: () => "/testimonial",
      providesTags: ["Testimonial"],
    }),
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetAllTestimonialQuery } =
  testimonialApi;
