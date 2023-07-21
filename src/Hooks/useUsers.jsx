import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useUsers = () => {
   const {user , loading} = useContext(AuthContext);
   const [axiosSecure] = useAxiosSecure();

   const {data: users=[] , isLoading: dataLoading , refetch} = useQuery({
    queryKey: ['users'],
    enabled: !loading,
    queryFn: async() =>{
        const res = await axiosSecure.get('/users')
        // console.log(res.data);
        return res.data;
    }
   })

   return [users, dataLoading , refetch];

};

export default useUsers;