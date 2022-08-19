import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import "swiper/css/navigation";



import { Autoplay, Navigation } from "swiper";

import Curosol from './Curosol'

const Header = (props) => {

    const slide = (props.slide);
    // console.log(slide);
    return (
        <header>
            <div className="slider-container carousel">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    // loop={true}
                    autoplay={{
                        autoplay: true,
                        delay: 8000,

                        disableOnInteraction: false,
                    }}

                >
                    {
                        slide && slide.map(item => {

                            return (
                                <SwiperSlide key={item.id}>
                                    <Curosol item={item} />
                                </SwiperSlide>


                            )
                        })
                    }
                </Swiper>
            </div>

        </header>
    )
}

export default Header