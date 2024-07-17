import Image from "next/image";
import styles from "../styles/StrongPoints.module.scss";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Service = ({ rutaImagen, title, description, link }) => {
  return (
    <div className={styles.service}>
      <Link href={link} >
        <div className={styles.link}>
          <div className={styles.div}>
            <Image src={rutaImagen} alt={`${title}` } width={100} height={100} className={styles.img}/>
          </div>
          <div className={styles.title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const StrongPoints = ({lugar}) => {
  return (
    <Section
      title="Optimiza todos los procesos con desarrolladores Shopify/Shopify Plus"
      subtitle="Construye sobre seguro con una agencia Shopify"
      description="Las mejores soluciones traen los mejores resultados."
      id="services"
      className={styles.section}
      lugar={lugar}
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service 
            number={1} 
            description="Enamora a tus clientes a primera vista"
            title="Desarrollo de temas"
            rutaImagen={'/ux.svg'}
            link={'/desarrollo-temas-shopify'}
          />
            
          <Service
            rutaImagen={'/stairs.svg'}
            title="Desarrollo de apps"
            description="Elimina los límites de escalabilidad."
            link={'/desarrollo-apps'}
          />

          <Service
            rutaImagen={'/migration.svg'}
            title=" Migracion a Shopify"
            description="Migra tu plataforma actual a Shopify."
            link={'/migration-shopify'}
          />

          
        </Fade>
      </div>
      <div className={styles.container} style={{ marginTop: "3rem" }}>
        <Fade cascade damping={0.05}>
          <Service
            rutaImagen={'/headless.png'}
            title="Desarrollo Headless"
            description="Diseños que traspasan las fronteras de Shopify"
            link={'/headless-shopify'}
          />
          <Service
            title="Scraping de competidores"
            description="Conoce los precios de tu competencia en tiempo real."
            rutaImagen={'/scraping.png'}
            link={'/scraping'}
          />
          <Service
            title="Atención al cliente con IA"
            description="Optimiza los procesos con tus clientes"
            rutaImagen={'/customer-service.png'}
            link={'/atencion-cliente-ia'}
          />
        </Fade>
      </div>
    </Section>
  );
};

export default StrongPoints;
