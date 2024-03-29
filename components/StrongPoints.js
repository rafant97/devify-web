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
      title="No pierdas ninguna venta"
      subtitle="Construye sobre seguro"
      description="Las mejores soluciones traen los mejores resultados."
      id="services"
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service 
            number={1} 
            description="El diseño que conecta con tus clientes."
            title="Desarrollo de temas"
            rutaImagen={'/ux.svg'}
            // link={'/#'}
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
          <Service
            rutaImagen={'/develop.svg'}
            title="Headless"
            description="Una tienda desarrollada para ti con las ventajas de shopify"
            // link={'#'}
          />
        </Fade>
      </div>
    </Section>
  );
};

export default StrongPoints;
