import Head from 'next/head'
import { GradientCircleTop, GradientCircleMd } from '../components/GradientCircle'
import styles from "../styles/Headless.module.scss"
import ImagenConTitle from '../components/ImagenConTitle'
import Section from '../components/Section'
import Beneficios from '../components/Beneficios'

const soporte = () => {
  return (
    <>
        <div className={'page dark'}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            
            <ImagenConTitle
                srcScript={"https://unpkg.com/@splinetool/viewer@1.8.0/build/spline-viewer.js"}
                splineViewer={"https://prod.spline.design/g9KYRFbeVXaqNH-M/scene.splinecode"}
                title={'Delega la parte técnica a los expertos'}
                parrafo={'Tú vendes, nosotros nos encargamos del resto'}
            />
            <main className='main'>
                <GradientCircleTop />
                <GradientCircleMd />
                <div className={styles.container}>
                    <p className={styles.title1}>
                        Si tienes un <span>volumen considerable de pedidos</span> {''}
                        y buscas <span>expertos en Shopify</span> que te ayuden a <span>vender 
                        más</span>...
                    </p>
                    <Section
                        subtitle={"Ventajas de trabajar con nosotros"}
                        title="¡Esto es para ti!"
                        description={"Optimizamos los procesos de tu tienda"}
                    >
                        <div className={styles.texto}>
                            <p>
                                Si tienes un volumen considerable de pedidos y buscas expertos en Shopify que te ayuden a vender más,
                                estás en el lugar correcto.
                            </p>
                            <div className={styles.grid}>
                                <Beneficios
                                    rutaImagen={'/conversion-rate.png'}
                                    title="Optimización del CRO"
                                    description="Para vender más sin invertir más en publicidad."
                                />
                                <Beneficios
                                    rutaImagen={'/speed.svg'}
                                    title="Mejora el customer journey"
                                    description="Facilita la compra para que en pocos clicks tu cliente se plantee comprar."
                                />
                                <Beneficios
                                    rutaImagen={'/integrations.png'}
                                    title="Automatiza procesos"
                                    description="Reduce costes, gana productividad y eficiencia."
                                />
                                <Beneficios
                                    rutaImagen={'/speed.svg'}
                                    title="Consigue la mejor UI/UX"
                                    description="Ofrece a tu cliente la mejor experiencia de compra."
                                />
                            </div>
                        </div>
                    </Section>
                </div>
            </main>
        </div>
    </>
  )
}

export default soporte
