"use client";

import { Children } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const SwipperComponent = ({ children, ...props }) => {
  return (
    <>
      <Swiper
        // slidesPerView={5}
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        {...props}
      >
        {Children.map(children, (child) => (
          <SwiperSlide className="rounded-xl">{child}</SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

// doesn't work because Swiper component from swiper/react expects its direct children to be SwiperSlide components
export const SwiperSlider = ({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};

// Set displayName to 'SwiperSlide' to ensure Swiper recognizes it
SwiperSlider.displayName = "SwiperSlide";
