import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar-3.svg";
import AVTR2 from "../../assets/avatar-3.svg";
import AVTR3 from "../../assets/avatar-3.svg";
import AVTR4 from "../../assets/avatar-3.svg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Otabek Ibodov",
    review:
      "The projects of mine and my company is done by time then everything is perfect!",
  },
  {
    avatar: AVTR2,
    name: "Javokhir Meliev",
    review:
      "The projects of mine and my company is done by time then everything is perfect!",
  },
  {
    avatar: AVTR3,
    name: "Nodirali Akbarov",
    review:
      "The projects of mine and my company is done by time then everything is perfect!",
  },
  {
    avatar: AVTR4,
    name: "Javlon Abdurakhimov",
    review:
      "The projects of mine and my company is done by time then everything is perfect!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonias</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatars" />
              </div>

              <h5 className="client__name">{name}</h5>

              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
