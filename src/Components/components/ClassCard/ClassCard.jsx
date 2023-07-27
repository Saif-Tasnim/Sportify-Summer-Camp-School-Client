import React, { useState } from 'react';

const ClassCard = ({ c }) => {

    // Task: TODO :-> Modal for update data

    return (

        <div className="card w-96 bg-base-100 shadow-xl image-full relative">
            <figure><img src={c.image} alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center pb-4 pt-4"> {c.className} </h2>
                <div className='text-center text-orange-300'>
                    <h4 className={`pb-2 ${c.status === 'Accepted' ? 'text-xl text-green-600 font-extrabold':c.status === 'Denied'?'text-xl text-red-600 font-extrabold':''}`}> Status : {c.status} </h4>
                    <h4 className='pb-2'>Total Seats : {c.seats} </h4>
                    <h4 className='pb-2'>Enrolled Students : {c.enrolled ? c.enrolled : 0}</h4>
                </div>
               
                    {
                        c.feedback &&  <div className='border-2 border-red-700 text-xl p-4 text-red-600'>
                            Feedback : {c.feedback}
                        </div>
                    }

               { c.status!=='Denied' && <div className="card-actions justify-end mt-5">
                    <button
                        className="btn btn-primary absolute bottom-3 right-2"

                    > Update Class </button>
                </div>}
            </div>
        </div>

    );
};

export default ClassCard;