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
      subtitle="Nuestros clientes"
      title="Clientes con los que trabajamos"
      id="clients"
    >
    <div 
      className={styles.client}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={'https://obsequ.de/'}>
        <div className={styles.div}>
          <Image src={'/obsequ.png'} alt={'obsequ'} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Obsequ</div>
        </div>
      </Link>

      <Link href={'https://4phones.eu/'}>
        <div className={styles.div}>
          <Image src={'/4phones.png'} alt={''} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>4Phones</div>
        </div>
      </Link>

      <Link href={'https://divisualproject.com/'}>
        <div className={styles.div}>
          <Image src={'/divisual-project.png'} alt={''} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Divisual Project</div>
        </div>
      </Link>

      <Link href={'https://nextgmbh.com/'}>
        <div className={styles.div}>
          <Image src={'/nextgmbh.png'} alt={''} width={1300} height={800} className={styles.img}/>
          <div className={styles.nombre}>Next Gmbh</div>
        </div>
      </Link>

    </div>

        
        
    </Section>
  );
};

export default Clients;
