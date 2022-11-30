import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();

    console.log(order)
    const { name, price, customername, } = order;

    return (
        <div className='max-w-screen-md mx-auto my-12'>

            <div className='flex justify-center flex-col items-center'>
                <h3 className="text-3xl">Payment for {name}</h3>
                <p className="text-xl mt-4">Hey, {customername}! Please pay <strong>${price}</strong> to complete your order</p>
            </div>

            <div className='flex justify-center'>
                <div className='w-96 my-12'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;