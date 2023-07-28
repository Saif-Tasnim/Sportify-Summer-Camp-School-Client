import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';


const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");
    const modalRef = useRef(null);

    let modalData;

    const { data: classData = [], refetch } = useQuery({
        queryKey: ['ManageClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/class');
            return res.data;
        }
    })

    const handleAccept = data => {
        fetch(`http://localhost:5000/class/admin/manage/${data._id}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${data.className} has approved !! `)
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleOpenModal = (data) => {
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
        modalData = data;

    }

    const handleSubmitButton = (event) => {
        const form = event.target;
        const field = form.details.value;
        
        fetch(`http://localhost:5000/class/admin/deny/${modalData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            },
            body: JSON.stringify({feedback:field})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Feedback sent successfully !! `)
                }
            })
            .catch(err => {
                toast.error(err.message);
            })

    }

    const handleCloseModal = () => {
        const modal = document.getElementById('my_modal_5');
        modal.close();
    }

    return (
        <div className='pt-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> All Pending Classes List  </h1>

            {/* table format */}
            <div className="overflow-x-auto">
                <table className="table mb-10">
                    {/* head */}
                    <thead className='text-base font-bold bg-slate-600 text-[#EEFF25] ml-4'>
                        <tr>
                            <th>  #  </th>
                            <th> Iamge </th>
                            <th> Class Name </th>
                            <th> Instructor  </th>
                            <th> Instructor Email </th>
                            <th> Available Seats </th>
                            <th> Price </th>
                            <th> Status </th>
                            <th> Action </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classData.map((d, index) => <tr>
                                <td> {index + 1} </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={d.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td> {d.className} </td>
                                <td> {d.name} </td>
                                <td> {d.email} </td>
                                <td className='text-center'> {d.seats} </td>
                                <td> ${d.price} </td>
                                <td className={`font-bold text-lg ${d.status === 'Accepted'
                                    ? 'text-green-600'
                                    : d.status === 'Denied'
                                        ? 'text-red-600'
                                        : d.status === 'pending'
                                            ? 'text-yellow-600'
                                            : ''
                                    }`}> {d.status} </td>
                                <td> <button className={`btn btn-outline btn-success 
                                ${d.status !== 'pending' ? 'hidden' : ""}`}
                                    onClick={() => handleAccept(d)}
                                >Accept</button></td>

                                <td><button className={`btn btn-outline btn-error 
                                ${d.status !== 'pending' ? 'hidden' : ""}`}
                                    onClick={() => handleOpenModal(d)}
                                > Deny </button>

                                    {/* modal box */}
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <form method="dialog" className="modal-box" onSubmit={handleSubmitButton}>
                                            <h3 className="font-bold text-lg text-center underline mb-6"> Feedback </h3>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text"> Provide The Cancellation Feedback </span>
                                                </label>
                                                <input type='text' placeholder="Feedback" className="input input-bordered w-full h-[100px]"
                                                    name='details'
                                                />
                                            </div>


                                            <div className='flex justify-end gap-5'>
                                                <div className="modal-action">
                                                    <button className="btn btn-success" >Submit</button>
                                                </div>

                                            </div>
                                        </form>
                                    </dialog>

                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClass;




/* 

import React from 'react';

const YourComponent = () => {
  const handleOpenModal = () => {
    const modal = document.getElementById('my_modal_5');
    modal.showModal();
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_5');
    modal.close();
  };

  return (
    <>
      <button className="btn" onClick={handleOpenModal}>Open modal</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
          
            <button className="btn" onClick={handleCloseModal}>Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default YourComponent;


*/