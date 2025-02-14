import { apiSlice } from "./api.service";

export const studentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createStudent: builder.mutation({
            query: (body) => ({
                url: "/student/create",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Student"],
        }),
        getStudent: builder.query({
            query: () => "/student/get",
            providesTags: ["Student"],
        }),
    }),
});

export const {
    useCreateStudentMutation,
    useGetStudentQuery,
} = studentApi;