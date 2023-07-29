import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckoutForm = ({ data }) => {
    const { loading } = useContext(AuthContext);

    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");


    const price = data.price;

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res)
                setClientSecret(res.data.clientSecret);
            })

    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            toast.error(error)
        }

        else {
            toast.success("done payment method")
            console.log("payment method : ", paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: data.studentName,
                        email: data.studentEmail,
                    },
                },
            }
        );

        if (confirmError) {
            toast.error(confirmError)
        }

        else {
            toast.success("payment successfully done. Enrolled in Course")
            console.log("paymentIntent", paymentIntent);
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
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
            <button className='mt-5 btn btn-primary btn-md' type="submit" disabled={!stripe || !clientSecret}>
                Proceed To Pay
            </button>
        </form>
    );
};

export default CheckoutForm;