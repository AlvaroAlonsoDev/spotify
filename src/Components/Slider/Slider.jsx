import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css"
import { useSelector } from 'react-redux'
import { Pagination } from "swiper";
import CardSmall from "../Card/CardSmall/CardSmall";
import { v4 as uuidv4 } from 'uuid';


export default function Slider() {

    const tracklist = useSelector(state => state.trackSlice);
    console.log(tracklist.list)

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={12}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <div className="row">

                    {tracklist.list.map((track) => {

                        return (

                            <SwiperSlide key={uuidv4()}>
                                <CardSmall
                                    track={track}
                                />
                            </SwiperSlide>
                        )

                    })}



                </div>
            </Swiper>
        </>
    );
}