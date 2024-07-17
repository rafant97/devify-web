
import Navbar from "../components/Navbar";
import {
  GradientCircleTop,
  GradientCircleMd,
} from "../components/GradientCircle";
import Intro from "../components/Intro";
import Methods from "../components/Methods";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import StrongPoints from "../components/StrongPoints";
import ShopifyPlusAgency from "../components/ShopifyPlusAgency";
import Membresia from "../components/Membresia";

import HeadSEO from "../components/HeadSEO";

export default function Home() {

  return (
    <>
      
      <div className={`page dark`}>
        <HeadSEO
          title="Agencia y Consultora Shopify | Expertos Shopify y Shopify Plus España"
          description="Somos una agencia y consultoría Shopify y Shopify Plus especializada en desarrollo de Apps, temas, Headless, Migraciones, Scraping... ¡Si buscas ayuda con tu tienda HAZ CLICK!"
          url=""
        />
        <Navbar />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <Intro />
          <StrongPoints />
          <Methods />
          <Clients />
          {/* <Services /> */}
          <ShopifyPlusAgency />
          <Membresia />
          <Contact />
        </main>
        <Footer />
        <Copyright />
      </div>
      
    </>
  );
}
