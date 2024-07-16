import { getData } from '@/redux/api/features/checkout/checkoutSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    })

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSelectChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(getData(userData));
        console.log('Selected Payment Method:', selectedPaymentMethod);
        console.log(userData)
        if (selectedPaymentMethod === 'cashOnDelivery') {
            navigate('/success')
        }
        if (selectedPaymentMethod === 'stripe') {
            navigate('/payment')
        }
        // Handle the form submission logic here

    };
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center px-8'>
            <div>
                <div className="lg:m-10">
                    <form className="relative border border-gray-100 space-y-3  mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
                        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">InFormation</h1>

                        <div>
                            <label className=""> Name </label>
                            <input onChange={handleInputChange} name='name' type="text" placeholder="Username" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required />
                        </div>
                        <div>
                            <label className=""> Email  </label>
                            <input onChange={handleInputChange} name='email' type="email" placeholder="Info@example.com" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required />
                        </div>
                        <div>
                            <label className=""> Address </label>
                            <input onChange={handleInputChange} name='address' type="text" placeholder="******" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required />
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2">
                            <div>
                                <label className=""> Phone: <span className="text-sm text-gray-400">(optional)</span> </label>
                                <input onChange={handleInputChange} type="text" placeholder="+543 5445 0543" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required />
                            </div>
                        </div>

                    </form>

                </div>
            </div>
            <div>
                {/* //payment options */}


                <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Payment Method</label>
                <select value={selectedPaymentMethod}
                    onChange={handleSelectChange} id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose Payment Method</option>
                    <option value="cashOnDelivery">Cash On Delivery</option>
                    <option value="stripe">Stripe Payment</option>
                </select>



                <button onClick={handleSubmit} type="button" className="group mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#21b3f1] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Checkout
