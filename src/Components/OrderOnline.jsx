import React from "react";
import Headline from "./Shared/Headline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-2 md:px-0">
      <header>
        <Headline
          description={"From 11:00am to 10:00pm"}
          title={"ORDER ONLINE"}
        ></Headline>
      </header>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-white font-cinzel text-2xl md:text-3xl absolute mt-96 ">
              SALADS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
      
            <img src={slide2} alt="" />
            <h3 className="text-white font-cinzel text-2xl md:text-3xl absolute mt-96 ">
           SOUPS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
         
            <img src={slide3} alt="" />
            <h3 className="text-white font-cinzel text-2xl md:text-3xl absolute mt-96 ">
           PIZZAS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
      
            <img src={slide4} alt="" />
            <h3 className="text-white font-cinzel text-2xl md:text-3xl absolute mt-96 ">
             DESERTS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
        
            <img src={slide5} alt="" />
            <h3 className="text-white font-cinzel text-2xl md:text-3xl absolute mt-96 ">
              SALADS
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default OrderOnline;
