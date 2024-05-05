import Image from "next/image";
import styles from "../styles/StrongPoints.module.scss";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Service = ({ rutaImagen, title, description, link }) => {
  return (
    <div className={styles.service}>
      {/* <Link href={link} > */}
        <div className={styles.link}>
          <div className={styles.div}>
            <Image src={rutaImagen} alt={`${title}` } width={100} height={100} className={styles.img}/>
          </div>
          <div className={styles.title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

const StrongPoints = () => {
  return (
    <Section
      title="Optimiza todos los procesos"
      subtitle="Construye sobre seguro"
      description="Las mejores soluciones traen los mejores resultados."
      id="services"
      className={styles.section}
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service 
            number={1} 
            description="Enamora a tus clientes a primera vista"
            title="Desarrollo de temas"
            rutaImagen={'/ux.svg'}
            // link={'/themeDevelopment'}
          />
            
          <Service
            rutaImagen={'/stairs.svg'}
            title="Desarrollo de apps"
            description="No pongas límite a la escalabilidad de tu tienda."
            // link={'#'}
          />

          <Service
            rutaImagen={'/migration.svg'}
            title=" Migraciones"
            description="Cambia tu sistema actual a Shopify."
            // link={'#'}
          />
        </Fade>
      </div>
      <div className={styles.container} style={{ marginTop: "3rem" }}>
        <Fade cascade damping={0.05}>
          <Service
            rutaImagen={'/develop.svg'}
            title="Integración de ERP"
            description="Centraliza tu inventario, envíos, devoluciones..."
            // link={'#'}
          />
          <Service
            title="Scraping de competidores"
            description="Conoce los precios de tu competencia en tiempo real."
            rutaImagen={'/scraping.png'}
            // link={'#'}
          />
          <Service
            title="Atención al cliente con IA"
            description="Optimiza los procesos con tus clientes"
            rutaImagen={'/customer-service.png'}
            // link={'#'}
          />
        </Fade>
      </div>
    </Section>
  );
};

export default StrongPoints;
