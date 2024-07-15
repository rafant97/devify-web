import Head from "next/head"
import Image from "next/image"
import styles from "../styles/ThemeDevelopment.module.scss"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";
import ImagenConTitle from "../components/ImagenConTitle";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contact from "../components/Contact";
import Section from "../components/Section";
import Beneficios from "../components/Beneficios";
import HeadSEO from "../components/HeadSEO";


const themeDevelopment = () => {
  return (
    <>
      <div className={`page dark`}>
        
      <HeadSEO 
        title="Desarrollo de temas personalizados para Shopify"
        description="Desarrolla temas a medida para mejorar la experiencia de tus clientes"
        url="desarrollo-temas-shopify"
      />
      <Navbar />
      <ImagenConTitle 
        srcScript={"https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"}
        splineViewer={"https://prod.spline.design/ucQBYkoyuae-RkVQ/scene.splinecode"}
        title={'Desarrollo de temas personalizados para Shopify'}
        parrafo={'Enamora a tus clientes a primera vista'}
      />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <div className={styles.container}>
            <p className={styles.title1}>
              Diseñamos, desarrollamos y lanzamos <span>
              temas a medida de alta conversion para </span> 
              que tus tiendas de Shopify o 
              Shopify Plus entreguen <span>
              la mejor experiencia de usuario</span>.
            </p>

              <Section 
                subtitle={"Beneficios de un tema personalizado para Shopify"}
                title="Rediseña tu tienda y aumenta tus tiendas"
                description={"Impacta en tus clientes y mejora tus resultados."}
              >
                <div className={styles.grid}>
                  <Beneficios 
                    rutaImagen={'/conversion-rate.png'}
                    title="Aumenta tu ratio de conversión"
                    description="Aumenta hasta un 2%"
                  />
                  <Beneficios 
                    rutaImagen={'/user-engagement.png'}
                    title="Mejora la retención de tus clientes"
                    description="Emplean más tiempo en tu tienda"
                  />
                  <Beneficios 
                    rutaImagen={'/search.png'}
                    title="Tus clientes encuentran lo que buscan"
                    description="La UI facilita la navegación por tu tienda"
                  />
                  <Beneficios 
                    rutaImagen={'/smartphone.png'}
                    title="Optimización para móviles"
                    description="Tu tienda al 100% en cualquier dispositivo"
                  />
                  <Beneficios 
                    rutaImagen={'/ranking.png'}
                    title="Mejor posicionamiento en buscadores"
                    description="Mejor estructura y tiempo de carga (SEO)"
                  />
                  <Beneficios 
                    rutaImagen={'/public-relation.png'}
                    title="Mayor percepción del valor de marca"
                    description="Refuerza la identidad de tu marca"
                  />
                </div>
              </Section>
          </div>
          <Services />
          <Contact />
        </main>
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default themeDevelopment
