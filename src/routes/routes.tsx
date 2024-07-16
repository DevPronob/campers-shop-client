import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../../src/pages/Home/Home";
import Products from "../../src/pages/Products/Products";
import MainLayout from "../../src/components/layout/MainLayout";
import ProductsDetail from "@/pages/ProductDetails/ProductsDetail";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import SuccessPage from "@/components/SuccessPage";
import Payment from "@/pages/Payment/Payment";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import About from "@/pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/product/:id",
                element: <ProductsDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/payment",
                element: <Payment />
            },
            {
                path: "/productManagement",
                element: <ProductManagement />
            },
            {
                path: "/success",
                element: <SuccessPage />
            },
            {
                path: "/about-us",
                element: <About />
            },
        ]
    },
]);
