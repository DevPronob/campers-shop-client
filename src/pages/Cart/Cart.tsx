import Spinner from '@/components/ui/spinner';
import { useDeleteCartMutation, useDeleteCartQuery, useGetCartQuery, useUpdateCartMutation } from '@/redux/api/features/cart/cartApi';
import { quantityByPayload } from '@/redux/api/features/cart/cartSlice';
import { TCartItem } from '@/types/productTypes';
import cartTotalPrice, { cartTotalAmount, getAmounts } from '@/utils/cartTotal';
import { RootState } from '@reduxjs/toolkit/query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

function Cart() {
    const [cart, setCart] = useState<TCartItem[] | null>(null);
    const { data, error, isLoading } = useGetCartQuery(undefined);
    const [updateCart] = useUpdateCartMutation();
    const [deleteCart] = useDeleteCartMutation();

    useEffect(() => {
        if (data) {
            setCart(data);
        }
    }, [data]);

    const handleIncrease = async (item) => {
        if (cart) {
            const updatedCart = cart.data?.map((ite) =>
                ite.productId._id === item.productId._id
                    ? { ...ite, quantity: ite.quantity + 1 }
                    : ite
            );
            setCart({ ...cart, data: updatedCart });
            console.log(cart, item);

            try {
                await updateCart({ id: item._id, quantity: item.quantity + 1 }).unwrap();
            } catch (error) {
                console.error('Failed to update cart', error);
            }
        }
    };
    const handleDecrease = async (item: TCartItem) => {
        if (cart) {
            const updatedCart = cart.data?.map((ite) =>
                ite.productId._id === item.productId._id
                    ? { ...ite, quantity: ite.quantity - 1 }
                    : ite
            );
            setCart({ ...cart, data: updatedCart });
            console.log(cart, item);

            try {
                await updateCart({ id: item._id, quantity: item.quantity - 1 }).unwrap();
                console.log('Update successful');
            } catch (error) {
                console.error('Failed to update cart', error);
            }
        }
    };
    const handleDelete = async (id: string) => {
        console.log(id)
        try {
            await deleteCart({ id })
        } catch (error) {
            console.error('Failed to delete album', error);
        }

    }
    const amounts = getAmounts(data);
    const totalAmount = cartTotalAmount(amounts);


    return (
        <div>
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-semibold text-center">Your Cart</h1>
                    </div>
                    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div className="bg-white shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-10">
                                <div className="flow-root">
                                    <ul className="-my-8">
                                        {cart?.data.map((items) => (
                                            <div key={items._id} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                <div className="shrink-0">
                                                    <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={items.productId.imageUrls[0]} alt={items.productId.name} />
                                                </div>
                                                <div className="relative flex flex-1 flex-col justify-between">
                                                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                        <div className="pr-8 sm:pr-5">
                                                            <p className="text-base font-semibold text-gray-900">{items.productId.name}</p>
                                                        </div>
                                                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                            <p className="shrink-0 w-20 text-base font-semibold text-[#21b3f1] sm:order-2 sm:ml-8 sm:text-right">{`$${items.productId.price}`}</p>
                                                            <div className="sm:order-1">
                                                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                    <button onClick={() => handleDecrease(items)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{items.quantity}</div>
                                                                    <button onClick={() => handleIncrease(items)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                        <button onClick={() => handleDelete(items._id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6 border-t border-b py-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400">Subtotal</p>
                                        <p className="text-lg font-semibold text-gray-900">${totalAmount.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400">Shipping</p>
                                        <p className="text-lg font-semibold text-gray-900">$8.00</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD </span>${(totalAmount + 8.00).toFixed(2)}</p>
                                </div>
                                <div className="mt-6 text-center">
                                    <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-[#21b3f1] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow">
                                        Checkout
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
