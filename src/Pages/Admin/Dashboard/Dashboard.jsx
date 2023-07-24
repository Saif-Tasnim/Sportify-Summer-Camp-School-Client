import React, { useContext } from 'react';
import UserNav from '../../../Components/Shared/UserNav/UserNav';
import Banner from './Banner/Banner';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Dashboard = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            <UserNav></UserNav>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;