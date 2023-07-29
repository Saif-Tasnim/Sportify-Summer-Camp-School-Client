import React, { useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Instructor.css';

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors/limit')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })


    return (
        <div className='mt-28 mb-28'>
            <h1 className='text-center text-[#959f24] underline mb-14 text-4xl'> Our Popular Instructor </h1>
            <div ref={sliderRef} className="keen-slider">
                {
                    instructors.map(i =>
                        <div className="card w-52 bg-base-100 shadow-xl keen-slider__slide number-slide1">
                            <div className="card-body items-center">
                                <h2 className="text-2xl font-extrabold">{i.name}</h2>
                                <p>{i.email}</p>
                                <p>{i.address}</p>
                            </div>
                            <figure><img src={i.photo} alt="Shoes" /></figure>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;