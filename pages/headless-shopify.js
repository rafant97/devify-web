import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Headless.module.scss"
import Navbar from "../components/Navbar"
import ImagenConTitle from "../components/ImagenConTitle"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";
import Section from "../components/Section"
import Beneficios from "../components/Beneficios";
import Membresia from "../components/Membresia"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HeadSEO from "../components/HeadSEO"


const headlessShopify = () => {
  return (
    <>
      <div className={`page dark`}>
        
        <HeadSEO
          title="Agencia Shopify Headless"
          description="Desarrollamos tiendas headless que conectan y enfocadas en convertir con Shopify Plus"
          url="headless-shopify"
        />
        <Navbar />
        <ImagenConTitle
            srcScript={"https://unpkg.com/@splinetool/viewer@1.8.0/build/spline-viewer.js"}
            splineViewer={"https://prod.spline.design/g9KYRFbeVXaqNH-M/scene.splinecode"}
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

                <Section
                    subtitle={"Una tienda exclusiva para ti"}
                    title="¿Que es Shopify Headless?"
                    description={"¿Y cuales son sus beneficios?"}
                >
                  <div className={styles.texto}>
                    <p>Shopify Headless separa el front end y el back end de tu tienda. ¿Y
                      esto que significa? Básicamente tu plantilla/tema, es decir, 
                      la parte visible de tu tienda para tus clientes, está separada del 
                      panel de administración
                      de Shopify con el que gestionas tu tienda.
                    </p>
                    <br></br>
                    <p><span>¿Por qué se hace esto?</span>
                    <br></br>Para eliminar las 
                    limitaciones del backend y conseguir flexibilidad en el diseño
                    de nuestra tienda. Para ello, debes de proporcionar ese
                    front end, ese diseño en el que navegarán tus clientes para comprarte.</p>
                    <br></br>
                    <p>Nosotros a través de React (una librería de Javascript hecha para esta
                      función) te proporcionamos ese frontend que se comunica únicamente con
                      el backend cuando lo necesita.
                    </p>
                    <br></br>
                    <p><span>¿Cuando pasar a Shopify Headless?</span>
                    <br></br>
                      Si tienes una tienda consolidada y ves que tu tienda tiene ciertas necesidades
                      a las que shopify no está llegando este es un buen momento para plantearselo.
                    </p>
                  </div>

                  <div className={styles.grid}>
                    <Beneficios
                      rutaImagen={'/speed.svg'}
                      title="Velocidad de carga de la web"
                      description="Mejora tu SEO, tu ratio de conversión y tu escalabilidad."
                    />
                    <Beneficios
                      rutaImagen={'/integrations.png'}
                      title="Integración Multicanal"
                      description="Facilidad de integración con diversos canales de venta a través del mismo back-end."
                    />
                    <Beneficios
                      rutaImagen={'/corazon.png'}
                      title="Experiencia de compra única y diferencial"
                      description="Tiendas 3d inmersivas, diseños sin precedentes y mucho más."
                    />
                    <Beneficios
                      rutaImagen={'/backend.png'}
                      title="Mayor flexibilidad en las integraciones"
                      description="Puedes integrar servicios y herramientas sin depender del entorno Shopify"
                    />
                    
                    <Beneficios
                      rutaImagen={'/develop.svg'}
                      title="Desarrollo Ágil"
                      description="Desarrolladores pueden trabajar de manera independiente en el front-end y back-end."
                    />
                    <Beneficios
                      rutaImagen={'/updates.png'}
                      title="Actualizaciones Independientes"
                      description="Facilita el mantenimiento y las actualizaciones."
                    />
                    <Beneficios
                      rutaImagen={'/ab-testing.png'}
                      title="Pruebas A/B y Personalización Dinámica"
                      description="Facilidad para implementar y gestionar pruebas A/B y personalizaciones individuales para el cliente."
                    />
                    <Beneficios
                      rutaImagen={'/proteger.png'}
                      title="Más seguridad por aislamiento de componentes"
                      description="Separar el front-end y el back-end ofrece una capa adicional de seguridad, reduciendo la superficie de ataque en el sistema"
                    />
                  </div>
                </Section>
                <Section
                    subtitle={"Alternativas al CMS de Shopify"}
                    title="¿Puedo seguir usando editor CMS con Headless?"
                    description={"Consigue lo mejor de ambas arquitecturas"}
                >
                  <div className={styles.texto}>
                    <p>Sí, aunque el editor CMS de Shopify dejará de funcionar existen soluciones para este tipo de
                      arquitecturas para que puedas personalizar el contenido de los módulos sin necesidad de saber
                      programación.
                    </p>
                    <br></br>
                    <p>Existen soluciones como <Link href="https://getshogun.com/learn/sunsetting-shogun-frontend">Shogun
                    </Link> o <Link href="https://www.contentful.com/use-case/composable-commerce/">Contentful</Link>{' '}
                    que te permiten hacerlo.</p>
                  </div>
                  <Image src="/shogunfrontend.png" alt="Shogun" className={styles.imagen} width={700} height={600} />

                </Section>
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

export default headlessShopify
