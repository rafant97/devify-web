import React from "react";
import Section from "./Section";
import styles from "../styles/Methods.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const Methods = () => {
  const [method1, setMethod1] = useState(true);
  const [method2, setMethod2] = useState(false);
  const [method3, setMethod3] = useState(false);
  const [parent] = useAutoAnimate();
  return (
    <Section
      subtitle="Cubrimos el ciclo completo"
      title="¿Y después?"
      description="Impulsa tu tienda con una estrategia que de resultados predecibles y sostenibles en el tiempo."
      id="methods"
    >
      <div className={styles.container}>
        <div className={styles.methods}>
          <JackInTheBox cascade damping={0.04}>
            <button
              className={method1 ? styles.active : ""}
              onClick={() => {
                setMethod1(true);
                setMethod2(false);
                setMethod3(false);
              }}
            >
              <h3>SEO para Shopify</h3>
              <p>Sé el primero en aparecer cuando tu cliente te busque.</p>
            </button>
            <button
              className={method2 ? styles.active : ""}
              onClick={() => {
                setMethod1(false);
                setMethod2(true);
                setMethod3(false);
              }}
            >
              <h3>SEM y Social Ads</h3>
              <p>Lleva potenciales clientes a tu embudo de ventas.</p>
            </button>
            <button
              className={method3 ? styles.active : ""}
              onClick={() => {
                setMethod1(false);
                setMethod2(false);
                setMethod3(true);
              }}
            >
              <h3>Soporte y Mantenimiento</h3>
              <p>Te acompañamos en todo el proceso.</p>
            </button>
          </JackInTheBox>
        </div>
        <div className={styles.images} ref={parent}>
          {method1 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/seo.jpg"
            />
          )}
          {method2 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/social-ads.jpg"
            />
          )}
          {method3 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/support.jpg"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Methods;
