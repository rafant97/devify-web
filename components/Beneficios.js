import styles from "../styles/ThemeDevelopment.module.scss"
import Image from "next/image"

const Beneficios = ({rutaImagen, title, description}) => {
    return (
      <div className={styles.beneficios}>
        <Image src={rutaImagen} alt={`${title}` } width={80} height={80} className={styles.img}/>
        <div className={styles.divBeneficios}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  export default Beneficios