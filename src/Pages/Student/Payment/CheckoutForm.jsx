import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import './CheckoutForm.css';
import { toast } from 'react-hot-toast';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

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
            console.log(paymentMethod);
        }

    }



    return (
        <form onSubmit={handleSubmit}>
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
            <button className='mt-5 btn btn-primary btn-md' type="submit" disabled={!stripe}>
                Proceed To Pay
            </button>
        </form>
    );
};

export default CheckoutForm;