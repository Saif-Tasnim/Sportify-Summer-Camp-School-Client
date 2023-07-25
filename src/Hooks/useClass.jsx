import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: classList=[] , isLoading, refetch} = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/class/${user?.email}`)
            return result.data
        }
    })

    return [classList, refetch];
   
};

export default useClass;