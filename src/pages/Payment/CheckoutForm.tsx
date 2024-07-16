import { useGetCartQuery } from '@/redux/api/features/cart/cartApi';
import { useCreatePaymentMutation, useCreatePaymentWithUserMutation } from '@/redux/api/features/checkout/checkoutApi';
import { RootState } from '@/redux/store';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface CheckoutFormProps {
    price: number;
    cart: any; // Replace with a specific type if available
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const [cardError, setCardError] = useState<string>('');
    const [processing, setProcessing] = useState<boolean>(false);
    const [transactionId, setTransactionId] = useState<string>('');
    const userData = useSelector((state: RootState) => state.checkout);
    // const [createPayment, { data }] = useCreatePaymentMutation();
    // const [createPaymentWithUser, { data: userInfo }] = useCreatePaymentWithUserMutation();
    const [clientSecret, setClientSecret] = useState("");
    const { data, error, isLoading } = useGetCartQuery("");
    console.log(data, "cartDatacartData")
    useEffect(() => {
        const fetchPaymentIntent = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/payment/createPayment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ price: price }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setClientSecret(data?.data.clientSecret);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchPaymentIntent();
    }, [price]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true);

        if (clientSecret) {
            navigate('/success')
            //     const updates = payload.map(product => ({
            //         _id: product._id,
            //         quantity: product.quantity
            //     }));

            //    const updatedDataWithQuantity =
        }

        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card
        //         },
        //     },
        // );

        // if (confirmError) {
        //     console.log(confirmError);

        // }

        setProcessing(false);
        // if (paymentIntent) {
        //     setTransactionId(paymentIntent.id);
        //     // save payment information to the server
        //     const payment = {
        //         email: userData?.email,
        //         stripePaymentId: paymentIntent.id,
        //         name: userData.name,
        //         cart: cart.data._id,
        //         address: userData?.address,
        //         phone: userData.phone
        //     };

        //     const requestOptions = {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payment),
        //     };

        //     fetch('http://localhost:5000/api/payment', requestOptions)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(data);
        //             if (data) {
        //                 console.log(data);
        //                 nagivate('/success')
        //             }
        //         })
        //         .catch((error) => {
        //             console.error('Error making POST request:', error);
        //         });
        // }
    };

    return (
        <>
            <form className='card' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='pay_btn' type="submit" disabled={!stripe || processing}>
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
