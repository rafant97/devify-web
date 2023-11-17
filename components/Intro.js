import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>
            Marketing Agency <br />
            For <br />
            Developers
          </h1>
          <p>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials.
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
        <div className={styles.illustration}>
          <Image
            width="100%"
            height="100%"
            objectFit="contain"
            layout="responsive"
            src="/intro.svg"
          />
        </div>
      </div>
    </Section>
  );
};

export default Intro;
