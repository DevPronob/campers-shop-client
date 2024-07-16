import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useGetCartQuery } from '@/redux/api/features/cart/cartApi';
import CheckoutForm from './CheckoutForm';
import { cartTotalAmount, getAmounts } from '@/utils/cartTotal';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HVdTWBLa4QtAMbzJF8fESJt8K44YI2RpHvgDeomDGPXujOgO65ZODQda0qJjd7KiMCyuKPq1NpAfrpXYhaw5VTG00f5DSaCaY');
function Payment() {
    const { data } = useGetCartQuery(undefined);
    const amounts = getAmounts(data);
    const totalAmount = cartTotalAmount(amounts);
    return (
        <div className='mt-[100px] payment_parant'>
            <div subHeading="please process" heading="Payment"></div>
            <h2 className="text-3xl py-4 text-center"> Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={data} price={totalAmount}></CheckoutForm>
            </Elements>
        </div>
    )
}

export default Payment