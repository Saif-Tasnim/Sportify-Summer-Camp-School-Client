import React from 'react';

const ClassCard = ({ c }) => {
    console.log(c);

    return (

        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={c.image} alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title pb-4 pt-4"> {c.className} </h2>
                <div className='text-center text-orange-300'>
                    <h4 className='pb-2'> Status : {c.status} </h4>
                    <h4 className='pb-2'>Total Seats : {c.seats} </h4>
                    <h4 className='pb-2'>Enrolled Students : {c.enrolled ? c.enrolled : 0}</h4>
                </div>
                {
                    c.feedback && <div>
                        Feedback :
                    </div>
                }
                <div className="card-actions justify-end mt-5">
                    <button className="btn btn-primary"> Update Class </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;