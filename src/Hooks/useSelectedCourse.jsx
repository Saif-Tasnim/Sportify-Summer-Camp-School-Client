import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedCourse = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data: selectCourse , refetch} = useQuery({
        queryKey: ['selectCourse'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/student/class/select')
            return res.data;
        }
    })
    return [selectCourse, refetch];
};

export default useSelectedCourse;