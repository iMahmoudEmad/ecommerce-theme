import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { SiteHead } from "@/components/SiteHead";
import { Card } from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import { CardC } from "@/components/card/Card.constant";
import CardI from "@/components/card/Card.interface";
import { Slider } from "@/components/slider/Slider";
import SliderI from "@/components/slider/Slider.interface";
import { SliderC } from "@/components/slider/Slider.constant";
import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import sliderStyles from "@/components/slider/Slider.module.scss";
import { SwiperSlide } from "swiper/react";

const inter = Inter({ subsets: ["latin"] });

const cards: CardI[] = [CardC, CardC, CardC];
const slides: SliderI[] = [
  SliderC,
  SliderC,
  SliderC,
  SliderC,
  SliderC,
  SliderC,
];

export default function Home() {
  return (
    <>
      <SiteHead />
      <Navbar />

      <Slider loop={true}>
        {slides.map((slide: SliderI) => (
          <SwiperSlide key={v4()}>
            <Link href={slide?.link}>
              <Image
                src={slide?.image}
                alt={slide?.name}
                width={1000}
                height={100}
                className={sliderStyles.sliderImage}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Slider>

      <main className={`${inter.className} ${styles.main}`}>
        {cards?.map((card, idx) => (
          <Card card={card} key={v4()} />
        ))}
      </main>
    </>
  );
}
