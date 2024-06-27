import Head from "next/head"
import styles from "../styles/Headless.module.scss"
import Navbar from "../components/Navbar"
import ImagenConTitle from "../components/ImagenConTitle"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";

const headlessShopify = () => {
  return (
    <>
      <div className={`page dark`}>
        //TODO: Crear componente de seo
        <Head>
            <title>Diseñamos, desarrollamos y lanzamos temas he</title>
        </Head>
        <Navbar />
        <ImagenConTitle
            srcScript={"https://unpkg.com/@splinetool/viewer@1.8.0/build/spline-viewer.js"}
            splineViewer={"https://prod.spline.design/e8exdqwJIVLCHAXR/scene.splinecode"}
            title={'Agencia Shopify Headless'}
            parrafo={'Desarrollado exclusivamente para tí'}
        />
        <main className="main">
            <GradientCircleTop />
            <GradientCircleMd />
            <div className={styles.container}>
                <p className={styles.title1}>
                    Desarrollamos <span>tiendas headless rápidas, que conectan y enfocadas 
                    en convertir </span>con Shopify Plus
                </p>
            </div>
        </main>
      </div>
    </>
  )
}

export default headlessShopify
