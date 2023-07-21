import React, { useContext } from 'react';
import useUsers from '../../../Hooks/useUsers';
import User from './User';
import { AuthContext } from '../../../Providers/AuthProviders';

const ManageUsers = () => {
    const { loading } = useContext(AuthContext);
    const [users] = useUsers();
    
    if (loading) {
        return <progress className="progress progress-accent w-56" value="100" max="100"></progress>
    }

    return (
        <div className='pt-20 bg-base-200'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> All The Users Details </h1>

            {/*  table daisy ui  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-base font-bold bg-slate-600 text-[#EEFF25] ml-4'>
                        <tr>
                            <th>  #  </th>
                            <th> Image </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone </th>
                            <th> Gender </th>
                            <th> Role </th>
                            <th> Action </th>
                            <th> Action </th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>

                     {
                        users.map((u,index) => <User
                        key={u._id}
                        user={u}
                        index={index}
                        ></User>)
                     }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;