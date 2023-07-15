import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders'
import { motion } from "framer-motion";
import avatarImg from '../../../assets/avatar.webp'
import { toast } from 'react-hot-toast';

const MenuDropdown = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const show = {
        opacity: 1,
        display: "block",

    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };

    const getOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully Logged Out")
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>

                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />

                    {user &&
                        <div className='hidden md:block tooltip' data-tip={`${user?.displayName}`}>

                          
                                <img
                                    className='rounded-full'
                                    src={user && user.photoURL ? user.photoURL : avatarImg}
                                    alt='profile'
                                    height='30'
                                    width='30'
                                />
                           

                        </div>
                    }


                </div>
            </div >

            {isOpen && (

                <motion.div className="box" animate={isOpen ? show : hide}>

                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[150px] bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer text-black'>

                            {user ? (
                                <>
                                    <div
                                        to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                    >
                                        Dashboard
                                    </div>

                                    <div
                                        onClick={getOut}
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                    >
                                        Logout
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Link
                                        to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold block md:hidden'
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold block md:hidden'
                                    >
                                        Class
                                    </Link>
                                    <Link
                                        to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold block md:hidden'
                                    >
                                        Instructor
                                    </Link>
                                    <Link
                                        to='/login'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Login
                                    </Link>

                                </>
                            )}
                        </div>
                    </div>


                </motion.div>
            )}
        </div>
    )
}

export default MenuDropdown