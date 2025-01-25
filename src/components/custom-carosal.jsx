import { ArrowUp } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CarosalBody />
      </SwiperSlide>
      <SwiperSlide>
        <CarosalBody />
      </SwiperSlide>
      <SwiperSlide>
        <CarosalBody />
      </SwiperSlide>
      <SwiperSlide>
        <CarosalBody />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

// export const CustomCarosal = () => {
//   return (
//     <>
//       <CarosalBody />
//       <CarosalBody />
//       <CarosalBody />
//       <CarosalBody />
//       <CarosalBody />
//     </>
//   );
// };

const CarosalBody = () => {
  return (
    <div className="w-[400px] mb-7 mx-4">
      <div className="w-full">
        <ul className=" bg-slate-600 p-[18px] rounded-xl no-underline shadow-xl">
          <li className="w-full bg-white p-[18px] rounded-xl no-underline">
            <a
              href="#"
              className="w-full bg-white p-[18px] rounded-xl no-underline"
            >
              <img
                src="/bg.jpg"
                alt="bg"
                className="card-image w-full aspect-video object-cover rounded-[10px]"
              />
              <p className="badge">Developer</p>
              <h2 className="card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h2>
              <ArrowUp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
