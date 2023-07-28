import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useSelectedCourse from '../../../Hooks/useSelectedCourse';
import { BsTrash } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

const SelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectCourse, refetch] = useSelectedCourse();
    // console.log(selectCourse);

    return (
        <div className='pt-20 pb-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> These All {user?.displayName} Selected Class  </h1>

            {/* table info */}

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
                            <th> Action  </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            selectCourse.map((course, index) =>
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
                                    <td className='text-center'>${course.price}</td>
                                   
                                    <td>
                                        <div className="tooltip" data-tip="Pay">
                                            <button className="btn btn-warning btn-md text-lg"><FaRegMoneyBillAlt></FaRegMoneyBillAlt></button>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="tooltip" data-tip="Delete">
                                            <button className="btn btn-error btn-md text-lg">
                                                <BsTrash></BsTrash>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;