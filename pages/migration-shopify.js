import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import {
    GradientCircleTop,
    GradientCircleMd,
} from "../components/GradientCircle";
import ImagenConTitle from "../components/ImagenConTitle";
import styles from "../styles/Migration-shopify.module.scss"
import Section from '../components/Section';
import Beneficios from '../components/Beneficios';
const migrationShopify = () => {
  return (
    <div className={`page dark`}>
        //TODO: Crear componente de seo
        <Head>
            <title>Migration Shopify</title>
        </Head>
        <Navbar />
        <ImagenConTitle
            srcScript={"https://unpkg.com/@splinetool/viewer@1.4.3/build/spline-viewer.js"}
            splineViewer={"https://prod.spline.design/xPjk36-qLHBFPWwl/scene.splinecode"}
            title={'Agencia de migración Shopify '}
            parrafo={'Migramos tu tienda a Shopify sin complicaciones'}
            
        />
        <main className="main">
            <GradientCircleTop />
            <GradientCircleMd />
            <div className={styles.container}>
                <p className={styles.title1}>
                    Especialistas en migraciones de <span>Woocommerce, Magento, Prestashop o 
                    BigCommerce</span> a Shopify y Shopify Plus. <span></span>
                </p>
                <div className={styles.grid} style={{margin: '80px 0 0 0'}}>
                <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                  <h3>Somos una Agencia de Migración de Shopify</h3>
                  <p>Si estás aquí es porque tu sistema actual ya no te funciona. En su 
                    momento fue útil, 
                    pero hoy las necesidades de tu negocio son otras y tu actual CMS 
                    (Content Management System)
                    no cubre tus necesidades.
                  </p>
                    <br></br>
                  <p>Si estás cansado de apagar fuegos que no te permiten tener una visión 
                    de futuro estás en el sitio correcto.</p>
                    <div className={styles.actions}>
                      <Link href="#contact" legacyBehavior>
                        <a className={styles.customer} onClick={''}>
                          <span style={{color: 'white'}}>Quiero migrar a Shopify</span>
                          <FaArrowRight />
                        </a>
                      </Link>
                    </div>
                </div>
                <div style={{margin: '0 auto'}}>
                  <Image src="/cms.png" alt="tech" width={600} height={600} />
                </div>    
            </div>
                <Section
                    subtitle={"Beneficios de migrar con nosotros"}
                    title="Cambiar de plataforma nunca fue tan fácil"
                    description={"La mejor herramienta conlleva los mejores resultados."}
                >
                    <div className={styles.grid}>
                        <Beneficios
                            title="Soporte durante todo el proceso"
                            description="Te damos la mano para que la transición sea sencilla y fluida para ti."
                            rutaImagen={"/support.png"}
                        />
                        <Beneficios
                            title="Impacto nulo en tus ventas"
                            description="Tus clientes continuarán comprando como hasta ahora."
                            rutaImagen={"/ventas.png"}
                        />
                        <Beneficios
                            title="No pierdas ningun dato de tu tienda"
                            description="Pedidos, clientes, productos, reportes, descuentos..."
                            rutaImagen={"/data.png"}
                        />
                        <Beneficios
                            title="Rediseña tu tienda (o mantén lo que ya tienes)"
                            description="Mejora la UX de tu tienda o mantén el diseño que ya tienes."
                            rutaImagen={"/design.png"}
                        />
                        <Beneficios
                            title="SEO y redirección de URLs"
                            description="Optimizamos el SEO de tu tienda para aumentar el tráfico."
                            rutaImagen={"/search.png"}
                        />
                        <Beneficios
                            title="Integraciones con terceros"
                            description="Mantén las integraciones que ya tienes o crea nuevas."
                            rutaImagen={"/integrations.png"}
                        />
                    </div>
                </Section>
            </div>
        </main>
    </div>
  )
}

export default migrationShopify
