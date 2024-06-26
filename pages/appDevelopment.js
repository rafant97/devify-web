import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";
import styles from "../styles/AppDevelopment.module.scss"
import ImagenConTitle from "../components/ImagenConTitle";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contact from "../components/Contact";
import { FaArrowRight } from "react-icons/fa";

const appDevelopment = () => {
  return (
    <>
      <div className={`page dark`}>
        //TODO: Crear componente de seo
        <Head>
            <title>Diseñamos, desarrollamos y lanzamos temas he</title>
        </Head>
        <Navbar />
        <ImagenConTitle
            srcScript={"https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"}
            splineViewer={"https://prod.spline.design/o6fqLoKQ8f94EOsB/scene.splinecode"}
            title={'Desarrollo de Apps para Shopify'}
            parrafo={'Elimina los límites de escalabilidad en tu tienda'}
        />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <div className={styles.container}>
            <p className={styles.title1}>
                Desarrollamos<span> Apps de Shopify</span> hechas a medida para <span>
                optimizar los procesos y UX</span> de tu tienda.
            </p>
            
              <Section 
                  subtitle={"Beneficios de un tema hecho a medida"}
                  title="Aumenta tus ventas"
                  description={"Impacta en tus clientes y mejora tus resultados."}
                >
                  <div className={styles.grid}>
                    <Beneficios 
                      rutaImagen={'/conversion-rate.png'}
                      title="Customiza la apariencia"
                      description="Mejora la UX, el CTR y el valor medio por perdido"
                    />
                    <Beneficios 
                      rutaImagen={'/corazon.png'}
                      title="Aumenta el customer loyalty"
                      description="Asegúrate de que tus clientes vuelven a tu tienda."
                    />
                    <Beneficios 
                      rutaImagen={'/backend.png'}
                      title="Añade funcionalidades en el backend"
                      description="Gestiona cuentas de clientes, ajusta opciones de envío, promueve ventas..."
                    />
                    <Beneficios 
                      rutaImagen={'/money.svg'}
                      title="Ahorra en suscripciones y comisiones"
                      description="Puedes pagar una vez y usarla indefinidamente."
                    />
                    
                  </div>
              </Section>
          </div>
          <div>
            <Section
              subtitle="¿Con cual trabajas tu?"
              title="Algunas tecnologías con las que trabajamos"
              description={"Optimiza todos los procesos de tu tienda."}
            >
              <div className={styles.grid}>
                <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                  <h3>Tus procesos no tienen por qué ser un dolor de cabeza</h3>
                  <p>Realizamos integraciones con todo tipo de ERPs, apps de terceros, y 
                    funcionalidades de Shopify.</p>
                    <br></br>
                  <p>Coméntanos en el formulario cuál es el proceso actual de tu tienda.</p>
                    <br></br> 
                  <p>Nuestros expertos se pondrán en contacto contigo y comprobaremos 
                    la forma más efectiva de ejecutar ese proceso con la ayuda de la 
                    tecnología.</p>
                    <div className={styles.actions}>
                      <Link href="#contact" legacyBehavior>
                        <a className={styles.customer} onClick={''}>
                          <span>Quiero optimizar mis procesos</span>
                          <FaArrowRight />
                        </a>
                      </Link>
                    </div>
                </div>
                <div style={{margin: '0 auto'}}>
                  <Image src="/headlesspartners.png" alt="tech" width={400} height={400} />
                </div>
                
                
              </div>
              
            </Section>
          </div>
          <Contact />
        </main>
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default appDevelopment
