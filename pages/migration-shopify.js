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
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Contact from '../components/Contact';
import Membresia from '../components/Membresia';

//TODO: Crear componente de seo para el Head

const migrationShopify = () => {
  return (
    <div className={`page dark`}>
        
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
                  <div className={styles.cmsimg}>
                    <Image src="/cms.png" alt="tech" width={400} height={400} style={{width: '100%'}}/>
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
                <Section
                    subtitle={"El mejor CMS para Ecommerces"}
                    title="¿Por que migrar a Shopify?"
                    description={"Shopify te permite escalar sin complicaciones"}
                >
                  <div>
                    <p>Shopify te ofrece un <span style={{'font-weight': 'bold'}}>marco tecnológico </span>
                    perfecto para vender online en presente y futuro.
                    </p>
                    <br></br>
                    <p><span style={{'font-weight': 'bold'}}>Shopify provee sus servidores</span> para alojar 
                      en ellos sus tiendas, estos nos da una
                      gran ventaja frente a otras soluciones. Estos servidores son muy rápidos y nos
                      ofrecen una solución centralizada pero flexible y customizable al mismo tiempo.
                    </p>
                    <br></br>
                    <p>Esto se traduce en ventajas como:</p>
                    <div className={styles.grid} style={{margin: '60px 0 0 0'}}>
                      <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                        <p style={{'font-weight': 'bold', 'font-size': '25px', 'color': '#059dff'}}>Escalabilidad</p>
                        <br></br>
                        <p>Es la herramienta perfecta para no poner techo a tu crecimiento.</p>
                        <br></br>
                        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', margin: '0 auto'}}>
                          <li>Automatizaciones para distintos procesos</li>
                          <li>Más de 6000 apps disponibles</li>
                          <li>Integraciones con todo tipo de plataformas</li>
                        </div>
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                        <p style={{'font-weight': 'bold', 'font-size': '25px', 'color': '#059dff'}}>Más ventas</p>
                        <br></br>
                        <p>Sus optimizaciones repercuten en un incremento en tus ventas.</p>
                        <br></br>
                        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', margin: '0 auto'}}>
                          <li>Rápida velocidad de carga de la web</li>
                          <li>Checkouts de gran conversión</li>
                          <li>Venta internacional</li>
                        </div>
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                        <p style={{'font-weight': 'bold', 'font-size': '25px', 'color': '#059dff'}}>Gestión de Contenidos</p>
                        <br></br>
                        <p>Cambiar el frontend de tu tienda se convierte en una tarea sencilla a través de los módulos de shopify.</p>
                        <br></br>
                        <p>Simplemente arrastrando, añadiendo y haciendo click en los módulos puedes personalizar el Contenidos
                          de tu tienda.
                        </p>
                        <br></br>
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                        <p style={{'font-weight': 'bold', 'font-size': '25px', 'color': '#059dff'}}>Privacidad y Seguridad</p>
                        <br></br>
                        <p>Shopify da gran importancia a la información personal para preservar la confianza de sus clientes.</p>
                          <br></br>
                        <p>La plataforma está creada para ofrecer claridad y control sobre los datos personales, asegurando el 
                          cumplimiento de las normativas globales de privacidad y protección de datos.</p>
                        <br></br>
                      </div>
                      
                    </div>
                  </div>
                </Section>
            </div>
            <Membresia />
            <Contact />
        </main>
        <Footer />
        <Copyright />
    </div>
  )
}

export default migrationShopify
