import React from 'react';
import UserNav from '../../../Components/Shared/UserNav/UserNav';
import Banner from './Banner/Banner';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <UserNav></UserNav>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;