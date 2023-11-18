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

const StrongPoints = () => {
  return (
    <Section
      title="Don't miss any sales"
      subtitle="build on insurance"
      description="Best solutions trigger best results."
      id="services"
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service 
            number={1} 
            description="Get the fastest website and optimize your sell ratio."
            title="Fastest Performance"
            rutaImagen={'/speed.svg'}
          />
            
          <Service
            rutaImagen={'/stairs.svg'}
            title="Stack Completly Scalable"
            description="Handle automatically massive amounts of traffic for your campaigns."
          />

          <Service
            rutaImagen={'/ux.svg'}
            title="UX/UI Fully Customizable"
            description="Offer the best image of your bussiness and impact your customers."
          />
          <Service
            rutaImagen={'/target.svg'}
            title="SEO Friendly"
            description="Display your product/service for those who are looking for it."
          />
        </Fade>
      </div>
    </Section>
  );
};

export default StrongPoints;
