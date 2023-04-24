import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";

export const Card = () => (
  <Link href="#" className={styles.card} id="card">
    <Image
      src="/assets/images/product.jpg"
      alt="product card"
      width={100}
      height={100}
      className={styles.cardLogo}
    />

    <div className={styles.cardDetails}>
      <h2 className={styles.title} title={"title"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        repudiandae dignissimos ullam consequuntur, cumque aliquam consequatur
        provident a eius quisquam, voluptas adipisci, veritatis voluptatum
        dolore asperiores eos. Eaque, atque ad!
      </h2>

      <p className={styles.description} title={"description"}>
        Loremdescriptiondescriptiondescriptiondescriptiondescription
      </p>

      <span className={styles.price}>
        <span className={styles.currency}>EGP</span>
        <span className={styles.amount}>500</span>
      </span>

      <span className={styles.discount}>
        <span className={styles.oldAmount}>1000</span>
        <span className={styles.discountAmount}>50% discount</span>
      </span>

      <div className={styles.shipping}>
        <Image
          className={styles.shippingLogo}
          src="/assets/images/shipping.svg"
          alt="shipping"
          width={16}
          height={16}
        />

        <div className={styles.rate}>
          <span className={styles.rating}>
            <span className={styles.totalStars}>4.6</span>
            <Image
              className={styles.stars}
              src="/assets/images/star.svg"
              alt="star"
              width={8}
              height={8}
            />
          </span>
          <span className={styles.totalRates}>(1.6k)</span>
        </div>
      </div>

      <div className={styles.coupon}>{"7oda - Buy one get one free"}</div>
    </div>
  </Link>
);
