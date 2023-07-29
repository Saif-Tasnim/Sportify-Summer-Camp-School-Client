import React from 'react';
import Banner from '../Banner/Banner';
import NameScroll from '../NameScroll/NameScroll';
import Instructors from '../Instructors/Instructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NameScroll></NameScroll>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;