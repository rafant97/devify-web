import styles from "../styles/ShopifyPlusAgency.module.scss";
import Image from "next/image";

const ShopifyPlusAgency = () => {
  return (
    <div className={styles.container}>
        <Image src="/shopifyexperts.png" alt="shopifyplus" className={styles.img} width={120} height={25} />
        <p className={styles.title}>Shopify Agency</p>
        <h4>¿Buscas una agencia de Shopify Plus?</h4>
        {/* <a>¿Cuales son los beneficios de Shopify Plus?</a> */}
        <p className={styles.description}>Si planteas expandir tu plan de Shopify a Shopify Plus nosotros te acompañamos todo
            el proceso para que puedas aprovechar desde el primer momento los beneficios de 
            Shopify Plus.
        </p>
        {/* <a className={styles.link}>Pasa a shopify Plus con Devify</a> */}
    </div>
  )
}

export default ShopifyPlusAgency
