import React, { useState } from 'react';
import img1 from '../../../assets/Banner/img1.jpg'
import img2 from '../../../assets/Banner/img2.jpg'
import img3 from '../../../assets/Banner/img3.jpg'
import img4 from '../../../assets/Banner/img4.jpg'

import img6 from '../../../assets/Banner/img6.jpg'
import img7 from '../../../assets/Banner/img7.jpg'
import img8 from '../../../assets/Banner/img8.jpg'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Banner = () => {

    const [details, setDetails] = useState(null)

    const [sliderRef] = useKeenSlider({
        loop: true,
        detailsChanged(s) {
            setDetails(s.track.details)
        },
        initial: 2,
    })

    function scaleStyle(idx) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        }
    }

    const images = [img1, img2 , img3 , img4,  img6, img7 , img8];

    return (
         <div ref={sliderRef} className="keen-slider zoom-out">
                {images.map((src, idx) => (
                    <div key={idx} className="keen-slider__slide zoom-out__slide">
                        <div style={scaleStyle(idx)}>
                            <img src={src} className='h-screen w-full' />
                        </div>
                    </div>
                ))}
            </div>
        
    );
};

export default Banner;