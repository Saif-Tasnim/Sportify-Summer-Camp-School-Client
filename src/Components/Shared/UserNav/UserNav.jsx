import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import { AuthContext } from '../../../Providers/AuthProviders';
import useInstructor from '../../../Hooks/useInstructor';

const UserNav = () => {
    const { loading, user } = useContext(AuthContext);

    const adminNav = <>
        <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
        {/* <li><Link to="/dashboard" className='text-xl hover:text-amber-700'>Dashboard</Link></li> */}
        <li><Link to='/dashboard/manageClass' className='text-xl hover:text-amber-700'> Manage Classes </Link></li>
        <li><Link to='/dashboard/manageUsers' className='text-xl hover:text-amber-700'> Manage Users </Link></li>
    </>

    const instructorNav = <>
        <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
        {/* <li><Link to="/dashboard" className='text-xl hover:text-amber-700'>Dashboard</Link></li> */}
        <li><Link to='/dashboard/addClass' className='text-xl hover:text-amber-700'> Add A Class </Link></li>
        <li><Link to='/dashboard/myClass' className='text-xl hover:text-amber-700'> My Classes </Link></li>
    </>

    const studentNav = <>
        <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
        {/* <li><Link to="/dashboard" className='text-xl hover:text-amber-700'>Dashboard</Link></li> */}
        <li><Link to="/dashboard/mySelectClass" className='text-xl hover:text-amber-700'> My Selected Class </Link></li>
        <li><Link to='/dashboard/myEnrolledClass' className='text-xl hover:text-amber-700'> My Enrolled Classes </Link></li>
        <li><Link to='/dashboard/myPayment' className='text-xl hover:text-amber-700'> My Payment History </Link></li>
    </>

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (

        <div className='navbar pb-3 fixed z-10 custom-nav'>
            <div className="w-[35%] md:ml-40">
                {isAdmin && <Link to="/dashboard" className="flex gap-5 items-center">
                    <h1 className='text-lg font-bold md:text-2xl'> Welcome, Admin !  </h1>
                </Link>}

                {
                    !isAdmin &&
                    <Link to="/dashboard" className="flex gap-5 items-center">
                        <h1 className='text-lg font-bold md:text-2xl'> Welcome, {user.displayName} !  </h1>
                    </Link>
                }
            </div>

            <div className='w-[60%] ml-8'>
                <ul className='hidden md:flex md:gap-11'>
                    {
                        isAdmin && adminNav

                    }

                    {
                        isInstructor && instructorNav
                    }

                    {
                        !isAdmin && !isInstructor && studentNav
                    }
                </ul>
            </div>



        </div>
    );
};

export default UserNav;