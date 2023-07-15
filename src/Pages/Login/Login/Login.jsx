import React, { useContext, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        signIn(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                toast.success('Successfully logged in!')

                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)

            })


    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                toast.success('Successfully logged in!')

                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)

            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <Slide>
                    <div className="text-center bg-slate-600 text-white lg:text-left border-4 shadow-xl p-20 mr-10 border-l-rose-800 border-b-fuchsia-500 border-r-violet-800 border-t-cyan-500">

                        <h1 className="text-5xl font-bold mb-6">Login now !</h1>

                        <Fade delay={1e3} cascade damping={1e-1}>
                            Sportify Summer Camp is waiting for welcome you ...
                        </Fade>
                    </div>

                </Slide>


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <span className="label-text">Password</span>
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
                                                <p role="alert" className='text-red-600 pt-3'> Password is required </p>
                                            )}

                                        </>
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Login </button>
                            </div>

                            <div className="divider"> OR </div>

                            <div className="form-control mt-3">
                                <button className="btn bg-transparent border-2 border-emerald-500" onClick={handleGoogleSignIn}> <AiOutlineGoogle className='text-2xl' /> Continue With Google </button>
                            </div>

                        </form>

                        <div className='mt-4 ml-4'>
                            New to this site ? <Link to='/signup' className='underline text-blue-500'> Sign Up </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;