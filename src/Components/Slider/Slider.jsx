import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css"
import { useSelector } from 'react-redux'
import { Pagination } from "swiper";
import CardSmall from "../Card/CardSmall/CardSmall";
import { v4 as uuidv4 } from 'uuid';


export default function Slider({ array, title, size, slidesPerView, img, breakpoints }) {

    return (
        <>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={12}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper"
            >


                <div className="row">


                    {array.list.map((data) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <CardSmall
                                    data={data}
                                    size={size}
                                    img={img}
                                    slidesPerView={slidesPerView}
                                    breakpoints={breakpoints}
                                />
                            </SwiperSlide>
                        )

                    })}



                </div>
            </Swiper>
        </>
    );
}