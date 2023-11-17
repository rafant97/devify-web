import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Shopify Headless Ecommerce Development

          </h1>
          <p>
            We create solid selling systems to scalate your business.
          </p>
          <div className={styles.actions}>
            <Link href="#">
              <a className={styles.customer}>
                <span>New Customer</span>
                <FaArrowRight />
              </a>
            </Link>
            <Link href="">
              <a className={styles.contact}>
                <span>Contact Us</span>
                <FaArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
