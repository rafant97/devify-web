import styles from '../styles/ImagenConTitle.module.scss'
import Script from 'next/script'

const ImagenConTitle = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"></Script>
          <spline-viewer url="https://prod.spline.design/ucQBYkoyuae-RkVQ/scene.splinecode"></spline-viewer>
        </div>
        <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
          <h1 className={styles.textGreen}> Diseños personalizados para Shopify</h1>
          <p>Enamora a tus clientes a primera vista</p>
        </div>
      </div>
    </>
  )
}

export default ImagenConTitle
