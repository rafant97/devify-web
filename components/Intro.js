import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ParticlesContainer from "./ParticlesContainer";
import Image from "next/image";
import { useRouter } from "next/router";
import leads from "../data/leads";
let companyName

const Intro = () => {
  const router = useRouter();
  const name = router.query.slug;

  if (name) {
    // Función para encontrar el nombre de la compañía basado en el nombre del lead
    const findCompanyNameByFirstName = (firstName) => {
      // Recorre la lista de leads
      for (const lead of leads) {
        // Si el nombre coincide, devuelve el nombre de la compañía
        if (lead['First Name'] === firstName) {
          return lead['Company Name'];
        }
      }
      // Si no se encuentra el nombre, devuelve null o un mensaje de error, dependiendo de tu preferencia
      return null;
    };

    companyName = findCompanyNameByFirstName(name)
  } 

  
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          
            {name && companyName ? 
              <div className={styles.title}>
                <span className={styles.nameRed}>Hola {name}</span>
                <p className={styles.textGreen}>queremos ayudarte a mejorar </p> 
                <span className={styles.nameRed}> {companyName}</span>
              </div> 
              : <div className={styles.title}><p className={styles.textGreen}>La solución que necesita tu Ecommerce</p></div>
            }
          
            <h1>Agencia Shopify</h1><span><h2>especializada en desarrollo</h2></span>
            <div className={styles.div}>
              <Image src="/shopifyexperts.png" className={styles.img} width={500} height={80} alt="shopify-experts"/>
            </div>
            
          <div className={styles.actions}>
            <Link href="#contact" legacyBehavior>
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
