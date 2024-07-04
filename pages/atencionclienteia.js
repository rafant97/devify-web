import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import ImagenConTitle from "../components/ImagenConTitle"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";
import styles from "../styles/AtencionAlClienteconIa.module.scss"
import Section from "../components/Section";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contact from "../components/Contact";
import Membresia from "../components/Membresia";

const atClienteIa = () => {
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
                splineViewer={"https://prod.spline.design/9meiDploPqi5Klul/scene.splinecode"}
                title={'Atención al cliente con IA'}
                parrafo={'Más productividad, más fidelización y más beneficios'}
            />
            <main className="main">
                <GradientCircleTop />
                <GradientCircleMd />
                <div className={styles.container}>
                    <p className={styles.title1}>
                        Soluciona problemas 24/7 con tus clientes
                        <span> sin necesidad de que intervenga una persona</span>
                    </p>
                    <Section
                        title="¿Qué aporta un servicio de atención al cliente automatizado?"
                        subtitle="Beneficios de la atención al cliente IA"
                        description="Todos estos beneficios proporcionan una mejor experiencia del cliente, y por lo tanto mejor satisfacción, fidelidad y recomendación."
                    >
                      <div className={styles.grid}>
                        <Beneficios 
                            title="Velocidad"
                            description="Reduce los tiempos de respuesta a tus clientes."
                            rutaImagen={'/speed.svg'}
                        />
                        <Beneficios 
                            title="Comodidad"
                            description="Seguimiento y resolución de problemas en distintos canales."
                            rutaImagen={'/conveniente.png'}
                        />
                        <Beneficios 
                            title="Autonomía"
                            description="Ayuda a tus clientes a resolver problemas sencillos por sí mismos."
                            rutaImagen={'/support.png'}
                        />
                        <Beneficios 
                            title="Disponibilidad 24/7"
                            description="Los clientes obtienen ayuda en cualquier momento, mejorando su satisfacción."
                            rutaImagen={'/disponibilidad.png'}
                        />
                        <Beneficios
                            title="Reducción de Costos"
                            description="Elimina tareas repetitivas y deja que los humanos realicen las tareas de mayor valor."
                            rutaImagen={'/money.svg'}
                        />
                        <Beneficios
                            title="Escalabilidad"
                            description="Adaptate fácilmente a la demanda sin necesidad de incrementar el equipo."
                            rutaImagen={'stairs.svg'}
                        />
                      </div>
                    </Section>
                    <Section
                        subtitle="Ejemplo de atención al cliente con IA"
                        title="¿Cómo funciona el servicio de atención al cliente automatizado?"
                        className={styles.section2}
                    >
                      <div className={styles.grid} style={{margin: '80px 0 0 0'}}>
                        <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}}>
                          <p>Imagina que un cliente compra un dispositivo electrónico 
                            adquirido en tu tienda y no funciona. Lo primero que hace es visitar tu página web y 
                            accede a la sección de soporte. Aquí se activa un chatbot de inteligencia artificial 
                            que le solicita detallar el problema.</p>
                            <br></br>
                          <p>El sistema de inteligencia artificial reconoce las palabras clave: "no funciona". 
                            Basándose en estas palabras, redirige al cliente a un artículo donde se indica que debe 
                            retirar la pestaña de plástico de la ranura de la batería. El cliente se da cuenta de que 
                            no lo ha hecho, la retira y el dispositivo opera correctamente.</p>
                          
                          <br></br>
                          <p>Supongamos ahora que el problema es más complejo. Tal vez el cliente adquirió un producto 
                            que no funciona y no es horario comercial. El chatbot de 
                            inteligencia artificial no puede resolver el problema y le indica al cliente que envíe un 
                            correo electrónico al equipo de soporte. El cliente lo envía, recibe una respuesta 
                            automática que le informa que se ha generado un ticket y que un miembro del equipo de 
                            soporte se pondrá en contacto pronto.</p>
                            <br></br>
                            <p>Cuando el equipo regresa a la oficina, un representante de soporte se comunica con el cliente. 
                              Dado que el sistema de atención al cliente automatizado y el sistema de gestión de tickets están 
                              integrados, el representante puede ver que el cliente ya ha tomado las primeras medidas para 
                              solucionar el problema. Sin necesidad de hacer preguntas adicionales ni pedir al cliente que se 
                              repita, el representante determina que el producto está defectuoso y organiza de inmediato el 
                              envío de uno nuevo.</p>
                          </div>
                          <div className={styles.section2}>
                            <Image src="/bot-conversation.png" alt="atencion-cliente-ia" width={750} height={750} className={styles.imagen}/>
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
    </>
  )
}

export default atClienteIa
