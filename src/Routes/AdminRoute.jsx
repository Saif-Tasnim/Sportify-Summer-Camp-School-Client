import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace> </Navigate>
    );
};

export default AdminRoute;