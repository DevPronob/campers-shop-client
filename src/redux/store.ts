import { configureStore } from '@reduxjs/toolkit'
import productApi from './api/features/products/productApi'
import cartReducer from '../redux/api/features/cart/cartSlice'
import filterReducer from '../redux/api/features/filterData/filterDataSlice'
import checkoutReducer from '../redux/api/features/checkout/checkoutSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
        filterData: filterReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch