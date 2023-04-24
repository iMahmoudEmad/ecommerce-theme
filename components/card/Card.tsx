import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import CardI from "./Card.interface";

const inter = Inter({ subsets: ["latin"] });

export const Card = ({ card }: { card: CardI }) => (
  <Link
    href={`product/${card?.id}`}
    className={`${inter.className} ${styles.card}`}
    id="card"
  >
    <Image
      src={card?.image}
      alt={card?.name}
      width={100}
      height={100}
      className={styles.cardLogo}
    />

    <div className={styles.cardDetails}>
      <h2 className={styles.title} title={card?.name}>
        {card?.name}
      </h2>

      <p className={styles.description} title={card?.description}>
        {card?.description}
      </p>

      <span className={styles.price}>
        <span className={styles.currency}>{card?.price?.currency}</span>
        <span className={styles.amount}>{card?.price?.amount}</span>
      </span>

      <span className={styles.discount}>
        <span className={styles.oldAmount}>{card?.discount?.oldAmount}</span>
        <span className={styles.discountAmount}>
          {card?.discount?.discountAmount} discount
        </span>
      </span>

      <div className={styles.shipping}>
        <Image
          className={styles.shippingLogo}
          src={card?.shipping?.logo}
          alt={card?.shipping?.name}
          width={16}
          height={16}
        />

        <div className={styles.rate}>
          <span className={styles.rating}>
            <span className={styles.totalStars}>{card?.rate?.totalStars}</span>
            <Image
              className={styles.stars}
              src="/assets/images/star.svg"
              alt={card?.rate?.totalStars}
              width={8}
              height={8}
            />
          </span>
          <span className={styles.totalRates}>
            ({card?.rate?.totalPeopleRates})
          </span>
        </div>
      </div>

      <div className={styles.coupon}>{card?.coupon}</div>
    </div>
  </Link>
);
