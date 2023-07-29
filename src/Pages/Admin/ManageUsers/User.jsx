import React from 'react';
import { BsTrash } from 'react-icons/bs'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';


const User = ({ user, index, refetch }) => {

    const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();


    const handleMakeAdmin = adminUser => {
        // console.log("hits on" , user._id , user.name);
        fetch(`https://sportify-server-saif-tasnim.vercel.app/users/admin/${adminUser._id}`, {
            method: "PATCH",
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${adminUser.name} is now an admin !! `)
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleMakeInstructor = instructorUser => {
        const res = axiosSecure.patch(`/users/instructor/${instructorUser._id}`)
        // console.log(res);
        if (res) {
            refetch();
            toast.success(`${instructorUser.name} is now an instructor !! `)
        }
    }

    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photo} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {user.name}
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
            <td>{user.role}</td>


            <td>
                <button className="btn btn-outline btn-info"
                    disabled={user.role === "Admin" ? true : false}
                    onClick={() => handleMakeAdmin(user)}>
                    Make Admin </button></td>

            <td>
                <button className='btn btn-outline btn-warning'
                    disabled={user.role === 'Instructor' ? true : false}
                    onClick={() => handleMakeInstructor(user)}
                > Make Instructor </button></td>

            <td>
                <button className='btn btn-outline btn-error'> <BsTrash></BsTrash> </button>
            </td>
        </tr>
    );
};

export default User;