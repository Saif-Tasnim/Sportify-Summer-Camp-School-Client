import React, { useState } from 'react';

const ClassCard = ({ c }) => {
    const [modal, handleModal] = useState(false);

    // Task: TODO :-> Modal for update data

    return (

        <div className="card w-96 bg-base-100 shadow-xl image-full relative">
            <figure><img src={c.image} alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center pb-4 pt-4"> {c.className} </h2>
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
                    <button
                        className="btn btn-primary absolute bottom-3 right-2"

                    > Update Class </button>

                    {/* Open the modal using ID.showModal() method */}
                    <button className="btn" onClick={() => handleModal(true)}>open modal</button>

                    { modal &&
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn"
                                    onClick={()=>handleModal(false)}
                                    >Close</button>
                                </div>
                            </form>
                        </dialog>
                    }

                </div>
            </div>
        </div>

    );
};

export default ClassCard;