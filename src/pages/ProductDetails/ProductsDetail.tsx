import { useCreateCartMutation, useCreateCartQuery } from '@/redux/api/features/cart/cartApi';
import { decrement, increment } from '@/redux/api/features/cart/cartSlice';
import { useGetSingleProductsQuery } from '@/redux/api/features/products/productApi';
import { RootState } from '@reduxjs/toolkit/query';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sooner'

function ProductsDetail() {
    const [productSlider, setProductslider] = useState(0);
    const { id } = useParams();
    const { data: detailProduct, error, isLoading } = useGetSingleProductsQuery(id);
    const cartQuantity = useSelector((state: RootState) => state.cart.quantity);
    const dispatch = useDispatch();
    const [createCart, { data }] = useCreateCartMutation(undefined);

    const handleCart = async () => {
        const data = {
            productId: detailProduct?.data._id,
            quantity: cartQuantity,
        };

        try {
            await createCart(data).unwrap();
        } catch (err) {
            console.error("Failed to create cart:", err);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        toast.error("Failed To add product on cart")
    }
    if (data?.success) {
        toast.success('Product added to cart')
    }

    return (
        <div>
            <div>
                <section className="overflow-hidden bg-white pb-11 font-poppins dark:bg-gray-800">
                    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 md:w-1/2 ">
                                <div className="sticky top-0 z-50 overflow-hidden ">
                                    <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                        <img src={detailProduct?.data.imageUrls[productSlider]} alt=""
                                            className="object-cover w-full lg:h-full " />
                                    </div>
                                    <div className="flex-wrap hidden md:flex ">
                                        {
                                            detailProduct?.data.imageUrls?.map((item, index) => (
                                                <div className="w-1/2 p-2 sm:w-1/4">
                                                    <div
                                                        className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                                        <img onClick={() => setProductslider(index)} src={item} alt=""
                                                            className="object-cover w-full lg:h-20" />
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {/* <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </a>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </a>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </a>
                            </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 ">
                                <div className="lg:pl-20">
                                    <div className="mb-8 ">
                                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                            {detailProduct?.data.name}</h2>
                                        <div className="flex items-center">
                                            {/* <ul className="flex mr-2">
                                                <Stack spacing={1}>
                                                    <Rating name="size-small" value={detailProduct?.reviews} size="small" />
                                                </Stack>
                                            </ul> */}

                                        </div>
                                        <p className="max-w-md mb-8 text-gray-700 text-[15px]">
                                            {detailProduct?.data.description}
                                        </p>

                                        <p className="inline-block font-bold text-[#21b3f1] mb-4">
                                            {/* <span>{detailProduct?.offerPrice}</span> */}
                                            <span
                                                className="text-[16px] font-bold">${detailProduct?.data.price}</span>
                                        </p>



                                        <p className="text-sm">{`${detailProduct?.data.stock} in stock`}</p>
                                    </div>
                                    <div className="flex items-center ">
                                        {/* <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                Colors:</h2>
                            <div className="flex flex-wrap -mx-2 -mb-2">
                               
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                    <div className="w-6 h-6 bg-cyan-300"></div>
                                </button>
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-green-300 "></div>
                                </button>
                                <button
                                    className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-red-200 "></div>
                                </button>
                            </div> */}
                                    </div>
                                    <div className="flex items-center mb-8">
                                        <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                                            Size:</h2>
                                        <div className="flex flex-wrap -mx-2 -mb-1">
                                            {detailProduct?.size}
                                            {/* <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                                </button> */}
                                        </div>
                                    </div>
                                    <div className="w-32 mb-8 ">
                                        <label for=""
                                            className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                                        <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                            <button
                                                onClick={() => dispatch(decrement())}
                                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input type="number"
                                                min="0"

                                                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                value={cartQuantity} />
                                            <button onClick={() => dispatch(increment())}
                                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center -mx-4 ">
                                        <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                            <button type="button"
                                                onClick={handleCart}
                                                className="py-2 px-4 bg-[#ffffff] border border-[#21b3f1] text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#21b3f1] focus:ring-offset-2 focus:ring-offset-indigo-200 hover:bg-[#21b3f1] hover:text-white rounded-lg">Add To Cart</button>

                                        </div>
                                        <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                            <button type="button"
                                                className="py-2 px-4 bg-[#ffffff] border border-[#21b3f1] text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#21b3f1] focus:ring-offset-2 focus:ring-offset-indigo-200 hover:bg-[#21b3f1] hover:text-white rounded-lg">Add To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductsDetail