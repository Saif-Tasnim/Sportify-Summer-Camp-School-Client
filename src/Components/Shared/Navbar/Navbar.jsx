import React from 'react';
import MenuDropdown from '../../components/DropDown/DropDown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/istockphoto-1158975774-612x612.jpg'
import './Navbar.css';

const Navbar = () => {

    return (
        <div className='navbar pb-3 fixed z-10 custom-nav'>
            <div className="w-[35%] md:ml-40">
                <Link to="/" className="flex gap-5 items-center">
                    <img src={logo} className="w-48 h-24 rounded-3xl" alt="" />
                    <h1 className='text-lg font-bold md:text-2xl'> Sportify Summer <br />   <span className='md:ml-12'> School </span>   </h1>
                </Link>
            </div>

            <div className='w-[40%] ml-8'>
                <ul className='hidden md:flex md:gap-11'>
                    <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
                    <li><Link to='/classes' className='text-xl hover:text-amber-700'>Classes</Link></li>
                    <li><Link to='/instructors' className='text-xl hover:text-amber-700'>Instructors</Link></li>

                </ul>
            </div>

            <div className='justify-end'>
                <MenuDropdown></MenuDropdown>
            </div>


        </div>
    );
};

export default Navbar;