import Image from "next/image";
import styles from "../styles/StrongPoints.module.scss";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";

const Service = ({ rutaImagen, title, description }) => {
  return (
    <div className={styles.service}>
      <div>
        <Image src={rutaImagen} alt={`${title}` } width={100} height={100} className={styles.img}/>
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
Service.defaultProps = {
  rutaImagen: "/speed.svg",
  title: "High Performance",
  description: "There are many variations variations.",
};

const StrongPoints = () => {
  return (
    <Section
      title="Don't miss any sales"
      subtitle="build on insurance"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!"
      id="services"
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service number={1} />
          <Service
            rutaImagen={'/stairs.svg'}
            title="Stack completly scalable"
            description="Probando tete hasta la muerte bebe ajajajajaja jajajajaj jajajajaj"
          />
          <Service
            rutaImagen={'/target.svg'}
            title="App Development"
            description="Probando tete hasta la muerte bebe ajajajajaja jajajajaj jajajajaj"
          />
        </Fade>
      </div>
    </Section>
  );
};

export default StrongPoints;
