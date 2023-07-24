import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';


const imageHostingToken = import.meta.env.VITE_IMAGE_API_TOKEN;

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [dis, setDis] = useState(false);

    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        setDis(!dis);
        const formData = new FormData();
        formData.append('image', data.classPhoto[0]);

        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { className, name, classPhoto, email, seats, price } = data;
                    const seatInt = parseInt(seats);
                    const priceFloat = parseFloat(price);
                    const savedData = {
                        className,
                        name,
                        image: imgUrl,
                        email,
                        seats: seatInt,
                        price: priceFloat,
                        status: "pending"
                    }

                    axiosSecure.post('/class', savedData)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                setDis(!dis);
                                toast.success("New class added request successfully sent")

                            }
                        })
                }
            }


            )
    }


    return (
        <div className='pt-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> Fill The Form For New Class </h1>

            {/* form part start */}
            <div className='w-3/4 mx-auto mt-20 pb-20'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Class Name" className="input input-bordered input-primary w-full"
                        {...register("className", { required: true })} />
                    {errors.className?.type === "required" && (
                        <p className="text-red-700 pt-2" className="text-red-700 pt-2" role="alert">Class Name is required</p>
                    )}

                    <div className='flex flex-col mt-10 md:flex-row md:gap-8'>
                        <input type="text" className="input input-bordered input-primary w-full mb-5"
                            defaultValue={user?.displayName || "anonymous"}
                            readOnly
                            {...register("name", { required: true })}
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-700 pt-2" role="alert">Name is required</p>
                        )}

                        <input type="email" className="input input-bordered input-primary w-full mb-5"
                            defaultValue={user?.email || "anonymous@gmail.com"}
                            readOnly
                            {...register("email", { required: true })}
                        />
                        {errors.email?.type === "required" && (
                            <p className="text-red-700 pt-2" role="alert">email is required</p>)}
                    </div>


                    <div className='flex flex-col mt-10 md:flex-row md:gap-8'>
                        <input type="number" placeholder='Available Seats' className="input input-bordered input-primary w-full mb-5"
                            {...register("seats", { required: true })}
                        />
                        {errors.seats?.type === "required" && (
                            <p className="text-red-700 pt-2" role="alert">seats is required</p>)}

                        <input type="text" placeholder='Price' className="input input-bordered input-primary w-full mb-5"
                            {...register("price", { required: true })}
                        />
                        {errors.price?.type === "required" && (
                            <p className="text-red-700 pt-2" role="alert">price is required</p>)}
                    </div>

                    <div className='flex flex-col mt-10 md:flex-row md:gap-8'>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-5"
                            {...register("classPhoto", { required: true })}
                        />
                        {errors.classPhoto?.type === "required" && (
                            <p className="text-red-700 pt-2" role="alert"> Photo is required</p>)}
                    </div>

                    <div className='flex justify-center items-center mt-10'>
                        <button className="btn btn-outline btn-success"
                            disabled={dis}
                        >Add Button</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;