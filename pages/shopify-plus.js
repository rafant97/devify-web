import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import {
    GradientCircleTop,
    GradientCircleMd,
} from "../components/GradientCircle";
import ImagenConTitle from "../components/ImagenConTitle";
import styles from "../styles/ShopifyPlus.module.scss"

const shopifyPlus = () => {
  return (
    <div className={`page dark`}>
        <Head>
            <title>Migration Shopify</title>
        </Head>
        <Navbar />
        <ImagenConTitle
            srcScript={"https://unpkg.com/@splinetool/viewer@1.4.3/build/spline-viewer.js"}
            splineViewer={"https://prod.spline.design/xPjk36-qLHBFPWwl/scene.splinecode"}
            title={'Agencia Shopify Plus '}
            parrafo={'Tu Agencia de Shopify Plus en la que puedes confiar'}
            
        />
        <main className="main">
            <GradientCircleTop />
            <GradientCircleMd />
            <div className={styles.services}>
                <div className={styles.service}>
                    <Image src="/enlace.png" alt="speed" width={100} height={100} style={{filter: 'invert(100%)'}}/>
                    <h3>Internacionalización con Shopify Plus</h3>
                </div>
                <div className={styles.service}>
                    <Image src="/design.png" alt="speed" width={100} height={100} style={{filter: 'invert(100%)'}}/>
                    <h3>Diseño web para Shopify Plus</h3>
                </div>
                <div className={styles.service}>
                    <Image src="/develop.svg" alt="speed" width={100} height={100} style={{filter: 'invert(100%)'}}/>
                    <h3>Desarrollo a medida para Shopify Plus</h3>
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.title1}>
                    Lanzamos y hacemos crecer los Ecommerces <span>más ambiciosos</span>.
                </p>
                <p style={{margin: "3rem 0 0 0", fontSize: "20px"}}>Diseñamos y desarrollamos tiendas Shopify Plus 
                    que ofrecen<span> experiencias de compra únicas que 
                    fidelizan clientes y convierten ventas</span>. Combinando el poder de la 
                    creatividad con la mejor tecnología.
                </p>
            </div>
        </main>
    </div>
  )
}

export default shopifyPlus
