import Head from "next/head";
import { GradientCircleMd, GradientCircleTop } from "../components/GradientCircle";

const temas = () => {
  return (
    <div className={`page dark`}>
        <Head>
            <title>Shopify Headless Agency</title>
            <meta name="description" 
            content="Need SHOPIFY HEADLESS for your bussiness? We offer you the best selling platform available in the market" 
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main">
            <GradientCircleTop />
            <GradientCircleMd />
        </main>
    </div>
  )
}

export default temas
