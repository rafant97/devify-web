import Head from "next/head"
import Navbar from "../components/Navbar"
import ImagenConTitle from "../components/ImagenConTitle"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";
import styles from "../styles/Scraping.module.scss"
import Section from "../components/Section";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contact from "../components/Contact";
import Membresia from "../components/Membresia";

const scraping = () => {
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
                splineViewer={"https://prod.spline.design/xVu9CYvopUbXDu1I/scene.splinecode"}
                title={'Scraping ecommerce'}
                parrafo={'Consigue los precios de tu competencia en tiempo real'}
            />
            <main className="main">
                <GradientCircleTop />
                <GradientCircleMd />
                <div className={styles.container}>
                    <p className={styles.title1}>
                        Anlizamos tu competencia <span>en tiempo real</span> para que tomes las
                        mejores decisiones.
                    </p>
                    <Section
                        title="Consigue la información necesaria para dominar el mercado"
                        subtitle="Beneficios del scraping"
                        description="Consigue los mejores resultados de tu competencia en tiempo real"
                        id="services"
                        className={styles.section}
                    >
                      <div className={styles.grid}>
                        <Beneficios 
                          title="Precios dinámicos super precisos"
                          description="Analiza los precios de la competencia en tiempo real y ajusta los tuyos."
                          rutaImagen={'/conversion-rate.png'}
                        />
                        <Beneficios 
                          title="Conocede la oferta de mercado en todo momento"
                          description="Sé más competitivo conociendo toda la oferta disponible en internet."
                          rutaImagen={'/data.png'}
                        />
                        <Beneficios 
                          title="Seguimiento de inventarios"
                          description="Conoce el stock de la competencia y anticipa tendencias de demanda."
                          rutaImagen={'money.svg'}
                        />
                        <Beneficios 
                          title="Análisis de Opiniones y Reseñas"
                          description="Extrae reseñas para entender las preocupaciones de los clientes."
                          rutaImagen={'/scraping.png'}
                        />
                      </div>
                    </Section>
                    <p className={styles.title1} style={{ margin: "6rem 0" }}>
                        Desarrollamos el software de scraping <span>hecho a medida según tus necesidades</span>
                    </p>
                </div>
                <Membresia />
                <Contact />
            </main>
            <Footer />
            <Copyright />
      </div>
    
    </>
  )
}

export default scraping
