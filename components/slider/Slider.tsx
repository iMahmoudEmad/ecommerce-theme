import { Navigation, Pagination, A11y } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/a11y";

export const Slider = (props:any) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={props?.loop}
    >
      {props.children}
    </Swiper>
  );
};
