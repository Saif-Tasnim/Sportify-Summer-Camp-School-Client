import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen relative error-bg'>
            <Link to='/'>
                <button className='btn btn-neutral btn-md absolute right-5 top-5 '>
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;