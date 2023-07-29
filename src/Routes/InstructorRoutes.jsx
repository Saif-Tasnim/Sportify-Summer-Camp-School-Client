import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();

    if (loading || isInstructorLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isInstructor) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace> </Navigate>
    );
};

export default InstructorRoutes;