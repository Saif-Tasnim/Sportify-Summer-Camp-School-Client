import React, { useEffect, useState } from 'react';
import Banner from '../Home/Banner/Banner';
import InstructorCard from './InstructorCard';

const AllInstructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])

    return (
        <div className='bg-slate-200 pb-20'>
            <Banner></Banner>
            <h1 className='mt-20 pb-14 text-center text-[#9aa43b] text-3xl '> Instructors We Have </h1>

            <div className='mt-10 w-[90%] mx-auto grid grid-cols-3 gap-7'>
                {
                    instructor.map(ins =>
                        <InstructorCard
                            key={ins._id}
                            d={ins}
                        ></InstructorCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllInstructor;