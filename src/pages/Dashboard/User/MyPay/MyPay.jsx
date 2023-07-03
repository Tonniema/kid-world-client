// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChackoutForm from './ChackoutForm/ChackoutForm';
// import useCart from "../../../../Hooks/useCart";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Secret_Key);
const MyPay = () => {
    const pay = useLoaderData()
    // console.log(pay);
    const total = pay.class_price
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl text-black">Payment Getway</h2>
            <Elements stripe={stripePromise}>
                <ChackoutForm cart={pay} price={price}></ChackoutForm>
            </Elements>
        </div>
    );
};


export default MyPay;