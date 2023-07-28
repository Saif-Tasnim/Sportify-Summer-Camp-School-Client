import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProviders';

const useSelectedCourse = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user , loading } = useContext(AuthContext);

    const { data: selectCourse = [], refetch } = useQuery({
        queryKey: ['selectCourse' , user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/class/select/${user?.email}`)
            return res.data;
        }
    })
    return [selectCourse, refetch];
};

export default useSelectedCourse;