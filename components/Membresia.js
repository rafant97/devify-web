import styles from "../styles/Membresia.module.scss";
import Image from "next/image";
import Link from "next/link";

const Membresia = () => {
  return (
    <div className={styles.container}>
        <Image src="/pc.png" alt="membresía" className={styles.img} width={500} height={500} />
        <div className={styles.info}>
          <p className={styles.title}>Soporte mensual</p>
          <h4>Tu agencia para crecer mes a mes</h4>
          <p className={styles.description}>
            A través de nuestra memebresía te ofrecemos la ayuda necesaria para que tengas
            un crecimiento constante y previsible mes a mes. Ponemos toda nuestra experiencia
            a tu servicio para optimizar al máximo tus ratios de ventas y 
            el lifetime value de tu cliente.
          </p>
          <Link href="#contact" legacyBehavior>
            <a className={styles.link}>Quiero saber más</a>
          </Link>
        </div>
        
    </div>
  )
}

export default Membresia;
