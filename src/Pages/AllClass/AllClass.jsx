import React, { useEffect, useState } from 'react';
import Banner from '../Home/Banner/Banner';
import Card from './Card';


const AllClass = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data);

    return (
        <div className='bg-slate-200 pb-20'>
            <Banner></Banner>
            <h1 className='mt-20 pb-14 text-center text-[#9aa43b] text-3xl '> Courses We Provide </h1>

            <div className='mt-10 w-[90%] mx-auto grid grid-cols-3 gap-7'>
                {
                    data.map(d =>
                        <Card
                            key={d._id}
                            d={d}
                        ></Card>
                    )
                }
            </div>
        </div>
    );
};

export default AllClass;