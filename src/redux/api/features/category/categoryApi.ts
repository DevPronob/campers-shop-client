import { baseApi } from "../../baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.query({
            query: (body) => ({
                url: '/category',
                method: 'POST',
                body,
            }),
        }),
        getCategory: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET',
            }),
        }),
        getSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useCreateCategoryQuery, useGetCategoryQuery, useGetSingleCategoryQuery } = categoryApi;
export default categoryApi;
