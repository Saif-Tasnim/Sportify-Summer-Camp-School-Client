import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';

const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);

    const { data: classData = [], refetch } = useQuery({
        queryKey: ['ManageClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/class/admin/manage');
            return res.data;
        }
    })

    console.log(classData);

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
                                <td> {d.status} </td>
                                <td> <button className="btn btn-outline btn-success">Accept</button></td>
                                
                                <td><button className="btn btn-outline btn-error"> Deny </button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClass;