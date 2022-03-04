import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar-3.png";
import AVTR2 from "../../assets/avatar-3.png";
import AVTR3 from "../../assets/avatar-3.png";
import AVTR4 from "../../assets/avatar-3.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "First Client",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex!",
  },
  {
    avatar: AVTR2,
    name: "Second Client",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex!",
  },
  {
    avatar: AVTR3,
    name: "Third Client",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex!",
  },
  {
    avatar: AVTR4,
    name: "Fouth Client",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam! Veniam velit dolore repellendus quos et nam minus tenetur ipsam, libero nisi ab? Harum quo optio libero laboriosam odit ex!",
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
