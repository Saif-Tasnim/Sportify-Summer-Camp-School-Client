import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const EnrolledClass = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {data:enrolledData=[]} = useQuery({
    queryKey: ['enrolledData' , user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payment/${user?.email}`)
        return res.data;
    }
  })

    return (
        <div className='pt-20 pb-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> My Enrolled Course List  </h1>

            {/* table data */}
            <div className="overflow-x-auto">
                <table className="table mb-10">
                    {/* head */}
                    <thead className='text-base font-bold bg-slate-600 text-[#EEFF25] ml-4'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th> Class Name </th>
                            <th> Instructor Name </th>
                            <th> Course Price </th>
                            <th> Transaction Id  </th>
                            <th> Enrolled Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            enrolledData.map((course, index) =>
                                <tr>
                                    <td> {index + 1} </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={course.image} alt="Class Image" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {course.className}
                                    </td>
                                    <td>{course.instructorName}</td>
                                    <td className='text-center'>${course.amount}</td>
                                    <td className='text-center'>{course.transactionId}</td>
                                    <td className='text-center'>{course.date}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrolledClass;