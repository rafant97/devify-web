import styles from "../styles/Section.module.scss";
const Section = ({
  children,
  id,
  className,
  title,
  subtitle,
  description,
  border,
  lugar
}) => {
  return (
    <section
      id={id}
      className={`${className} ${border ? "" : styles.noBorder} ${
        styles.container
      }`}
    >
      {title && (
        <div className={styles.title}>
          <p className={styles.subtitle}>
            <span>{subtitle}{' '}{lugar}</span>
          </p>
          <h2>{title}{' '}{lugar}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      {title ? <div className={styles.children}>{children}</div> : children}
    </section>
  );
};

Section.defaultProps = {
  border: true,
};

export default Section;
