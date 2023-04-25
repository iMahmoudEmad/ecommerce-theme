import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { SiteHead } from "@/components/SiteHead";
import { Card } from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import { CardC } from "@/components/card/Card.constant";
import CardI from "@/components/card/Card.interface";
import { Slider } from "@/components/slider/Slider";

const inter = Inter({ subsets: ["latin"] });

const cards: CardI[] = [CardC, CardC, CardC];

export default function Home() {
  return (
    <>
      <SiteHead />
      <Navbar />

      <Slider />

      <main className={`${inter.className} ${styles.main}`}>
        {cards?.map((card, idx) => (
          <Card card={card} key={`${idx}-${card?.id}`} />
        ))}
      </main>
    </>
  );
}
