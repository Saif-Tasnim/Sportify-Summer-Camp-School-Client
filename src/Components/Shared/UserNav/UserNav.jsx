import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
    return (
       
       <div className='navbar pb-3 fixed z-10 custom-nav'>
            <div className="w-[35%] md:ml-40">
                <Link to="/dashboard" className="flex gap-5 items-center">
                    <h1 className='text-lg font-bold md:text-2xl'> Welcome, Admin !  </h1>
                </Link>
            </div>

            <div className='w-[60%] ml-8'>
                <ul className='hidden md:flex md:gap-11'>
                    <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
                    <li><Link to="/dashboard" className='text-xl hover:text-amber-700'>Dashboard</Link></li>
                    <li><Link className='text-xl hover:text-amber-700'> Manage Classes </Link></li>
                    <li><Link to='/dashboard/manageUsers' className='text-xl hover:text-amber-700'> Manage Users </Link></li>

                </ul>
            </div>

           

        </div>
    );
};

export default UserNav;