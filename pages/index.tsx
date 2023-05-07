import { Inter } from "next/font/google";
import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import styles from "@/styles/Home.module.scss";
import { SiteHead } from "@/components/SiteHead";
import { Card } from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import { Slider } from "@/components/slider/Slider";
import SliderI from "@/components/slider/Slider.interface";
import { SliderC } from "@/components/slider/Slider.constant";
import sliderStyles from "@/components/slider/Slider.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { RootState } from "@/store/store";
import { CardC } from '../components/card/Card.constant';

const inter = Inter({ subsets: ["latin"] });

const slides: SliderI[] = [
  SliderC,
  SliderC,
  SliderC,
  SliderC,
  SliderC,
  SliderC,
];

export default function Home() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

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
        {cart?.map((card) => (
          <Card card={card} key={v4()} />
        ))}
        
        <button onClick={() => dispatch(addToCart(CardC))}>click</button>
      </main>
    </>
  );
}
