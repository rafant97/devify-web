import { useState } from "react";
import Section from "./Section";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../styles/Clients.module.scss";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";

const Cliente = ({ nombre, imagen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.client} ${hovered ? styles.hovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.div}>
        <Image src={imagen} alt={nombre} width={900} height={800} className={styles.img}/>
        <div className={styles.nombre}>{nombre}</div>
      </div>
    </div>
  );
};


const Clients = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Section
      subtitle="Algunos de Nuestros clientes"
      title="Casos de éxito"
      id="clients"
    >
    <div 
      className={styles.client}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={'https://obsequ.de/'} target="_blank">
        <div className={styles.div}>
          <Image src={'/obsequ.png'} alt={'obsequ'} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Obsequ</div>
        </div>
      </Link>

      <Link href={'https://tetsuo.com/'} target="_blank">
        <div className={styles.div}>
          <Image src={'/tetsuo.png'} alt={'tetsuo'} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Tetsuo</div>
        </div>
      </Link>

      <Link href={'https://www.comprarhieloseco.es/'} target="_blank">
        <div className={styles.div}>
          <Image src={'/muyfrio.png'} alt={'muyfrio'} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Muyfrio</div>
        </div>
      </Link>

    </div>

        
        
    </Section>
  );
};

export default Clients;
