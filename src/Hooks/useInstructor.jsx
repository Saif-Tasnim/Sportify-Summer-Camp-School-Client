import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading:isInstructorLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log("responsing from isAdmin custom hook --->  " ,res);
            return res.data.instructor;
        }
    })

    return [isInstructor, isInstructorLoading , refetch];
}

export default useInstructor;