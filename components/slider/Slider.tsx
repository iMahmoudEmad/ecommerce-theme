import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slide) => (
        <SwiperSlide key={slide}>
          <Link href="#">
            <Image
              src="/assets/images/slider.png"
              alt="title"
              width={1000}
              height={100}
              className={styles.sliderImage}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
