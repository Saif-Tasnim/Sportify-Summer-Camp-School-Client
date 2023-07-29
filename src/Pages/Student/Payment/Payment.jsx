import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: specificData = {}, isLoading } = useQuery({
        queryKey: ['specificData', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/class/select?id=${id}&email=${user?.email}`)

            return res.data
        }
    })

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_TEST)

    return (
        <div className='pt-20 pb-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> Payment Page  </h1>

            <div className='flex gap-14 w-4/5 mx-auto text-center'>
                <input type="text" defaultValue={specificData.className}
                    readOnly
                    className="input input-bordered input-primary w-full max-w-xs" />

                <input type="text" className="input input-bordered input-primary w-full max-w-xs"
                    defaultValue={specificData.price}
                    readOnly
                />

                <input type="text" className="input input-bordered input-primary w-full max-w-xs"
                    defaultValue={specificData.studentEmail}
                    readOnly
                />
            </div>

            <div className='w-3/4 mx-auto mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;