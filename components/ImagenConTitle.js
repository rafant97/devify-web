import styles from '../styles/ImagenConTitle.module.scss'
import Script from 'next/script'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const ImagenConTitle = ({srcScript, splineViewer, title, parrafo}) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Script type="module" src={srcScript}></Script>
          <spline-viewer url={splineViewer}></spline-viewer>
        </div>
        <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
          <h1 className={styles.textGreen}>{title}</h1>
          <p>{parrafo}</p>
          <div className={styles.actions}>
            <Link href="#contact" legacyBehavior>
              <a className={styles.customer} onClick={''}>
                <span>Contacto</span>
                <FaArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagenConTitle
