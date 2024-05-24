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

const themeDevelopment = () => {
  return (
    <>
      <div className={`page dark`}>
      <Head>
        <title>Diseñamos, desarrollamos y lanzamos temas he</title>
      </Head>
      <Navbar />
      <ImagenConTitle />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <div className={styles.container}>
            <p className={styles.title1}>
              Diseñamos, desarrollamos y lanzamos <span>temas hechos a 
              medida para</span>   ayudar a que tus tiendas de Shopify o 
              Shopify Plus entreguen <span>la mejor experiencia de usuario</span>.
            </p>

              <Section 
                subtitle={"Beneficios de un tema hecho a medida"}
                title="Aumenta tus ventas"
                description={"Diseñamos y desarrollamos temas hechos a medida para que tus tiendas de Shopify o Shopify Plus entreguen la mejor experiencia de usuario. "}
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
