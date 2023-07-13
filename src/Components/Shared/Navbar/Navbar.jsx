import React from 'react';
import MenuDropdown from '../../components/DropDown/DropDown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/istockphoto-1158975774-612x612.jpg'

const Navbar = () => {

    return (
        <div className='navbar fixed pb-3 z-10'>
            <div className="w-[40%]">
                <Link to="/" className="flex gap-5 items-center">
                    <img src={logo} className="w-40" alt="" />
                    <h1 className='text-lg font-bold md:text-2xl'>Sportify Summer <br />     School   </h1>
                </Link>
            </div>

            <div className='w-[40%] ml-8'>
                <ul className='hidden md:flex md:gap-11'>
                    <li><Link to="/" className='text-xl hover:text-amber-700'>Home</Link></li>
                    <li><Link className='text-xl hover:text-amber-700'>Class</Link></li>
                    <li><Link className='text-xl hover:text-amber-700'>Instructor</Link></li>

                </ul>
            </div>

            <div className='justify-end'>
                <MenuDropdown></MenuDropdown>
            </div>


        </div>
    );
};

export default Navbar;