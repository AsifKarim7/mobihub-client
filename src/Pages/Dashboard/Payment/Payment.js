import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();

    console.log(order)
    const { name, price, img, customername, } = order;

    return (
        <div className='max-w-screen-xl mx-auto my-12'>

            <img src={img} className="w-20 h-20" alt="" />
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Hey, {customername}! Please pay <strong>${price}</strong> to complete your order</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;