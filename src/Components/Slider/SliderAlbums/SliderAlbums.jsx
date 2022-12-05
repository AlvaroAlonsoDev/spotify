import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css"
import { useSelector } from 'react-redux'
import { Pagination } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import CardBig from "../../Card/CardBig/CardBig";


export default function SliderAlbums() {

    const albumlist = useSelector(state => state.albumSlice);
    console.log(albumlist.list)

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={12}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <div className="row">


                    {albumlist.list.map((album) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <CardBig
                                    album={album}
                                />
                            </SwiperSlide>
                        )

                    })}



                </div>
            </Swiper>
        </>
    );
}