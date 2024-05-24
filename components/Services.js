import styles from "../styles/Services.module.scss";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";

const Service = ({ line, number, background, color, title, description }) => {
  return (
    <div className={styles.service}>
      <div className={styles.circle} style={{ background: background }}>
        <span style={{ color: color }}>{number}</span>
        {line ? <div className={styles.line}></div> : null}
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
Service.defaultProps = {
  line: true,
  number: 1,
  color: "var(--color-primary)",
  description: "There are many variations variations.",
};

const Services = () => {
  return (
    <Section
      title="We make the whole migration for you"
      subtitle="Think about starting over?."
      description="Your store will be available while we are working on your next bussiness level"
      id="services"
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service
            number={1}
            background="var(--color-tertiary-dark)"
            color="var(--color-tertiary)"
            title="Análisis"
            description="Comprobamos tus debilidades, fortalezas y oportunidades..."
          />
          <Service 
            background="var(--color-primary-dark)"
            number={2}
            title="Diseño"
            description="Con datos creamos el tema que enamora a tus clientes."
          />
          <Service
            number={3}
            background="var(--color-secondary-dark)"
            color="var(--color-secondary)"
            title="Desarrollo"
            description="Materializamos el diseño para implementarlo en tu tienda."
          />
          <Service
            number={4}
            background="var(--color-pink-dark)"
            color="var(--color-pink)"
            title="Despliegue"
            description="Publicamos el nuevo diseño sin interferir en las ventas"
          />

          <Service
            number={5}
            line={false}
            background="var(--color-pink-dark)"
            color="var(--color-pink)"
            title="Soporte"
            description="Mejoramos tu tema para que se adapte siempre a tus necesidades."
          />
        </Fade>
      </div>
    </Section>
  );
};

export default Services;
