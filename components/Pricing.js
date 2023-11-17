import styles from "../styles/Pricing.module.scss";
import Section from "./Section";
import Link from "next/link";

const Feature = ({ children }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.feature__icon}>
        <span>✓</span>
      </div>
      <div className={styles.feature__text}>
        <span>{children}</span>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <Section
      subtitle="Our Price Model"
      title="Detailed Pricing Table"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo."
      id="pricing"
    >
      <div className={styles.container}>
        <div className={styles.plan}>
          <h2>Advanced Plan.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, eius.
          </p>
          <div className={styles.price}>
            <span className={styles.num}>$159</span>
            <span className={styles.unit}>/mo</span>
          </div>
          <div className={styles.actions}>
            <Link href="">
              <a className={styles.purchase}>Purchase Now</a>
            </Link>
            <Link href="">
              <a className={styles.upgrade}>Upgrade</a>
            </Link>
          </div>
          <div className={styles.reviews}>
            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            <span className={styles.review}>
              Rated 4.8/5 Stars in 1000+ reviews.
            </span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <h3>Advance Plans.</h3>
            <Feature>5 PPC Campaigns</Feature>
            <Feature>Digital Marketing</Feature>
            <Feature>Marketing Agency</Feature>
            <Feature>Seo Friendly</Feature>
            <Feature>App Development</Feature>
            <Feature>Social Development</Feature>
          </div>
          <div className={styles.detail}>
            <h3>Basic Plans.</h3>
            <Feature>2 PPC Campaigns</Feature>
            <Feature>Digital Marketing</Feature>
            <Feature>Marketing Agency</Feature>
            <Feature>Seo Friendly</Feature>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
