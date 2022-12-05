import { FaRegPlayCircle } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";

// Import Swiper styles
import 'swiper/css/bundle';
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { CardSmall } from "../Card/CardSmall";


export default function Slider() {
    const trackList = useSelector(state => state.trackSlice);
    return (
        <>
            <h1>Best songs</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
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
                {
                    trackList.list.map((e, i) => (
                        <SwiperSlide key={i}>
                            <CardSmall e={e}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* <div className="profile-card-6"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-6.jpg" className="img img-responsive" />
                    <div className="profile-name">JOHN
                        <br />DOE
                    </div>
                    <div className="profile-position">Lorem Ipsum Donor</div>
                    <div className="profile-overview">
                        <div className="profile-overview">
                            <div className="d-flex text-center">
                                <div className="mx-2">
                                    <h3>1</h3>
                                    <p>Rank</p>
                                </div>
                                <div className="mx-2">
                                    <h3>50</h3>
                                    <p>Matches</p>
                                </div>
                                <div className="mx-2">
                                    <h3>35</h3>
                                    <p>Goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
    );
}
