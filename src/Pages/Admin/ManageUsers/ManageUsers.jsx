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
        <div>
            <h1> All The Users Details </h1>

            {/*  table daisy ui  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>  #  </th>
                            <th> Image </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone </th>
                            <th> Gender </th>
                            <th> Role </th>
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