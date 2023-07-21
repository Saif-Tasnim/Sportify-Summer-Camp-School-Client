import React from 'react';

const User = ({user , index}) => {
console.log(user) 
   
    return (
        <tr>
            <td>
               {index+1} 
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photo}/>
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
            
        </tr>
    );
};

export default User;