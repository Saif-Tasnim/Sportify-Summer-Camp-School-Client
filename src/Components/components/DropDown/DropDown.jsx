import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders'

const MenuDropdown = () => {
    const { user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>

                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    {/* <div className='hidden md:block'>
            <Avatar />
          </div> */}
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[150px] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>

                        {user ? (
                            <>
                                <Link
                                    to='/'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                                <div
                                    onClick={logOut}
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
            )}
        </div>
    )
}

export default MenuDropdown