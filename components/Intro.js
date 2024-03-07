import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ParticlesContainer from "./ParticlesContainer";
import Image from "next/image";

const Intro = () => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.title}>
            La solución que necesita tu Ecommerce
          </p>
            <h1>Agencia Shopify</h1><span><h2>especializada en desarrollo</h2></span>
            <div className={styles.div}>
              <Image src="/shopifyexperts.png" className={styles.img} width={500} height={80} />
            </div>
            
          <div className={styles.actions}>
            <Link href="#contact" >
              <a className={styles.customer} onClick={''}>
                <span>Contacto</span>
                <FaArrowRight />
              </a>
            </Link>
            
          </div>
        </div>
      </div>
      <ParticlesContainer />
    </Section>
  );
};

export default Intro;
