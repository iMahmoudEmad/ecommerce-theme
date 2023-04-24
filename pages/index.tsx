// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.scss";
import { SiteHead } from "@/components/SiteHead";
import { Card } from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SiteHead />
      <Navbar />
      
      <main className={styles.main}>
        <Card />
      </main>
    </>
  );
}
