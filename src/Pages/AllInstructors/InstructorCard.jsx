import React from 'react';

const InstructorCard = ({ d }) => {



    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full relative">
            <figure><img src={d.photo} alt="class image" /></figure>
            <div className="card-body font-extrabold">
                <h2 className="mt-3 text-center text-2xl mb-3">{d.name}</h2>

                <div className='mt-6'>
                    <h3 className='mt-3'> Email : {d.email} </h3>
                    <h3 className='mt-3'> Phone : {d.phone} </h3>
                    <h3 className='mt-3'> Address : {d.address} </h3>

                </div>

             
            </div>
        </div>

    );
};

export default InstructorCard;