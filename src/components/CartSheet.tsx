import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from './ui/sheet';
import { useGetCartQuery } from '@/redux/api/features/cart/cartApi';

function CartSheet() {
    const { data, error, isLoading } = useGetCartQuery(undefined);
    console.log(data, "data cart")
    return (
        <div >
            <Sheet>
                <SheetTrigger>
                    <button className="relative p-2 m-[-4px]">
                        {/* Replace with your trigger button content */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Shopping cart</SheetTitle>
                        <SheetDescription>Your selected items</SheetDescription>
                    </SheetHeader>
                    <div className="mt-8">
                        <div className="flow-root px-4 h-[200px] overflow-y-scroll">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {
                                    data?.data.map((items) => {
                                        return < div className="flex py-6" >
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={items?.productId.imageUrls[0]}
                                                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href="#">{items?.productId.name}</a>
                                                        </h3>
                                                        <p className="ml-4">{items?.productId.price}</p>
                                                    </div>
                                                    {/* <p className="mt-1 text-sm text-gray-500">Blue</p> */}
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">{`Qty ${items?.quantity}`}</p>
                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-[#21b3f1] hover:text-[#21b3f1]">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        {/* <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                        </div> */}
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                {/* or
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button> */}

                                <button type="button"
                                    className="py-2 w-[185px] px-4 bg-[#21b3f1] border border-[#21b3f1] text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#21b3f1] focus:ring-offset-2 focus:ring-offset-indigo-200 hover:bg-[#21b3f1] hover:text-white rounded-lg">Go to Cart</button>
                            </p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet >
        </div>
    );
}

export default CartSheet;



{/* <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
            alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
            className="h-full w-full object-cover object-center"
        />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
        <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                    <a href="#">Medium Stuff Satchel</a>
                </h3>
                <p className="ml-4">$32.00</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Blue</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty 1</p>
            <div className="flex">
                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
        </div>
    </div>
</li> */}