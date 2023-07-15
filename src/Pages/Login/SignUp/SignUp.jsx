import React, { useContext, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signUp, updateData } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        // console.log(data)

        signUp(data.email, data.password)
            .then(res => {
                updateData(data.name, data.photo)
                    .then(res => {
                        toast.success("sucessfully created account")
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        toast.error(err.message);
                    })
            })
            .catch(err => {

            })
    }

    return (
        <div className="pt-10 min-h-screen bg-base-200 pb-10">
            <div className="flex mt-6 flex-col lg:flex-row lg:gap-20 lg:items-center">

                <Slide>
                    <div className="text-center bg-slate-600 text-white lg:text-left border-4 shadow-xl p-28  border-l-rose-800 border-b-fuchsia-500 border-r-violet-800 border-t-cyan-500 ml-20">

                        <h1 className="text-4xl font-bold mb-6"> Hurry Up  ! </h1>

                        <Fade delay={1e3} cascade damping={1e-1}>
                            Create account now ... 😃
                        </Fade>
                    </div>

                </Slide>


                <div className="card flex-shrink-0 shadow-2xl max-w-4xl bg-base-100 ml-10">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* name + photo url */}
                            <div className='flex gap-9 mb-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Name </span>
                                    </label>

                                    <input type="text" placeholder="Name" className="input input-bordered"
                                        {...register("name", { required: true })} />
                                    {errors?.name?.type === "required" && (
                                        <p role="alert" className='text-red-600 pt-3'> Name is required </p>
                                    )}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Photo URL </span>
                                    </label>

                                    <div className='flex items-center'>
                                        <input type="text" placeholder="Photo URL" className="input input-bordered w-full"
                                            {...register("photo")}
                                        />

                                    </div>
                                </div>
                            </div>

                            {/* email + phone number */}
                            <div className='flex gap-9 mb-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Email </span>
                                    </label>

                                    <input type="email" placeholder="email" className="input input-bordered"
                                        {...register("email", { required: true })} />
                                    {errors?.email?.type === "required" && (
                                        <p role="alert" className='text-red-600 pt-3'> Email is required </p>
                                    )}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Phone Number      </span>
                                    </label>

                                    <div className='flex items-center'>
                                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full"
                                            {...register("phone")}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* password + confirm Password */}
                            <div className='flex gap-9 mb-3'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    {
                                        showPassword ?
                                            <>
                                                <div className='flex items-center'>
                                                    <input type="text" placeholder="password" className="input input-bordered w-full"
                                                        {...register("password",
                                                            {
                                                                required: true,
                                                                minLength: 6,
                                                                pattern: '/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/'
                                                            })}
                                                    />
                                                    <AiFillEyeInvisible className='-ml-5 hover:cursor-pointer'
                                                        onClick={() => { setShowPassword(!showPassword) }}
                                                    ></AiFillEyeInvisible>
                                                </div>

                                                {errors?.password?.type === "required" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password is required </p>
                                                )}
                                                {errors?.password?.type === "minLength" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password greater than 6 characters </p>
                                                )}
                                                {errors?.password?.type === "pattern" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password must have one Uppercase and One special character </p>
                                                )}
                                            </>
                                            :
                                            <>
                                                <div className='flex items-center'>
                                                    <input type="password" placeholder="password" className="input input-bordered w-full"
                                                        {...register("password",
                                                            {
                                                                required: true,
                                                                minLength: 6,
                                                                pattern: '/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/'
                                                            })}
                                                    />
                                                    <AiFillEye className='-ml-5 hover:cursor-pointer'
                                                        onClick={() => { setShowPassword(!showPassword) }}
                                                    ></AiFillEye>
                                                </div>

                                                {errors?.password?.type === "required" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password is required </p>
                                                )}
                                                {errors?.password?.type === "minLength" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password greater than 6 characters </p>
                                                )}
                                                {errors?.password?.type === "pattern" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Password must have one Uppercase and One special character </p>
                                                )}

                                            </>
                                    }
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Confirm Password</span>
                                    </label>

                                    {
                                        showPassword ?
                                            <div className='flex items-center'>
                                                <input type="text" placeholder="password" className="input input-bordered w-full"
                                                    {...register("password", { required: true })}
                                                />
                                                <AiFillEyeInvisible className='-ml-5 hover:cursor-pointer'
                                                    onClick={() => { setShowPassword(!showPassword) }}
                                                ></AiFillEyeInvisible>

                                            </div>

                                            :
                                            <>
                                                <div className='flex items-center'>
                                                    <input type="password" placeholder="password" className="input input-bordered w-full"
                                                        {...register("password", { required: true })}
                                                    />
                                                    <AiFillEye className='-ml-5 hover:cursor-pointer'
                                                        onClick={() => { setShowPassword(!showPassword) }}
                                                    ></AiFillEye>
                                                </div>
                                                {errors?.password?.type === "required" && (
                                                    <p role="alert" className='text-red-600 pt-3'> Confirm Password is required </p>
                                                )}

                                            </>
                                    }
                                </div>

                            </div>


                            {/* gender + address */}
                            <div className='flex gap-9 mb-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Address </span>
                                    </label>

                                    <input type="text" placeholder="Address" className="input input-bordered"
                                        {...register("address",)} />


                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Gender </span>
                                    </label>

                                    <select className='p-2 rounded-md mt-1' {...register("gender")}>
                                        <option value="male">male</option>
                                        <option value="female">
                                            female</option>
                                        <option value="other">other</option>

                                    </select>

                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Sign Up </button>
                            </div>

                        </form>

                        <div className='mt-4 text-center'>
                            Already owns account ? <Link to='/login' className='underline text-blue-500'> LogIn </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;