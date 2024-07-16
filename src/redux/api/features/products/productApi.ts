import { baseApi } from "../../baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProducts: builder.mutation({
            query: (body) => ({
                url: '/products',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Product'],
        }),
        getProducts: builder.query({
            query: ({ minPrice, maxPrice, category, searchTerm, sort }) => {
                console.log(minPrice, maxPrice, category, searchTerm);
                return {
                    url: '/products',
                    method: 'GET',
                    params: { minPrice, maxPrice, category, searchTerm, sort },
                };
            },
            providesTags: ['Product'],
        }),
        getProductsWithoutFilter: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags: ['Product'],
        }),
        getSingleProducts: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
            providesTags: ['Product'],
        }),
        updateProducts: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Product'],
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetProductsQuery,
    useGetProductsWithoutFilterQuery,
    useGetSingleProductsQuery,
    useCreateProductsMutation,
    useUpdateProductsMutation,
    useDeleteProductsMutation
} = productApi;

export default productApi;
