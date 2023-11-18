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
            title="Analyze your bussiness"
            description="Through data we research your needs, weaknesses and opportunities..."
          />
          <Service 
            background="var(--color-primary-dark)"
            number={2}
            title="Data, Features and Tools Migration"
            description="Migrate your customers, orders, products as you already have it"
          />
          <Service
            number={3}
            background="var(--color-secondary-dark)"
            color="var(--color-secondary)"
            title="UX/UI Design and Branding"
            description="Get an appareance that shows off your bussiness and converts sales."
          />
          <Service
            number={4}
            background="var(--color-pink-dark)"
            color="var(--color-pink)"
            title="Web Development"
            description="Create the system with accurate data of your bussiness."
          />

          <Service
            number={5}
            line={false}
            background="var(--color-pink-dark)"
            color="var(--color-pink)"
            title="SEO Optimization"
          />
        </Fade>
      </div>
    </Section>
  );
};

export default Services;
