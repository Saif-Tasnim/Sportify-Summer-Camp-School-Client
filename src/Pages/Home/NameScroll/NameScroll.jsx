import React from 'react';
import ParallaxText from '../../../Components/components/MoveText/MoveText';


const NameScroll = () => {
    return (
       <div className='mt-20 p-8 mb-20'>
        <ParallaxText 
        baseVelocity={-5} 
        heading=" Sportify Summer Camp School"
        subHeading = " We here to push you towards your goal"
        >  
        </ParallaxText>
       </div>
    );
};

export default NameScroll;