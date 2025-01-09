import React, { useEffect, useState } from "react";
import Headline from "./Shared/Headline";
import quoteIcon from "../assets/home/q.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <header>
        <Headline
          description={"What Our Clients Say"}
          title={"TESTIMONIALS"}
        ></Headline>
      </header>
      <section>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center">
                <Rating
                  style={{
                    maxWidth: 180,
                    marginTop: "48px",
                    marginBottom: "48px",
                  }}
                  value={review.rating}
                  readOnly
                />
                <div className="w-[100px] h-[100px] mb-10">
                  <img className="w-full h-full" src={quoteIcon} alt="" />
                </div>
                <p className="max-w-[80%] mx-auto mb-3">{review.details}</p>
                <p className="font-medium text-color-cd text-2xl md:text-[32px]">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
