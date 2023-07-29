import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckoutForm = ({ data }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);


    const price = data.price;

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                // console.log(res)
                setClientSecret(res.data.clientSecret);
            })

    }, [axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        setLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            toast.error(error)
            setLoading(false);
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
            setLoading(false);
        }

        else {

            // console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setLoading(false);
                const date = new Date();
                const transactionId = paymentIntent.id;
                const payment = {
                    className: data.className,
                    studentName: data.studentName,
                    image: data.image,
                    transactionId: transactionId,
                    instructorName: data.instructorName,
                    studentEmail: data.studentEmail,
                    amount: data.price,
                    status: 'enrolled',
                    date: date
                };

                axiosSecure.post('/payment', payment)
                    .then(res => {
                        console.log(res);
                        if (res.data.deleteRes.deletedCount || res.data.insertedRes.insertedId || res.data.updateRes.modifiedCount) {
                            toast.success("payment successfully done. Enrolled in Course")
                        }
                    })

            }
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
            <button className='mt-5 btn btn-primary btn-md' type="submit" disabled={!stripe || !clientSecret || loading}>
                Proceed To Pay
            </button>
        </form>
    );
};

export default CheckoutForm;