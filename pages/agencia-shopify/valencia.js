import Navbar from "../../components/Navbar";
import {
  GradientCircleTop,
  GradientCircleMd,
} from "../../components/GradientCircle";
import Intro from "../../components/Intro";
import Methods from "../../components/Methods";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import StrongPoints from "../../components/StrongPoints";
import ShopifyPlusAgency from "../../components/ShopifyPlusAgency";
import Membresia from "../../components/Membresia";

import HeadSEO from "../../components/HeadSEO";

export default function valencia() {

  return (
    <>
      
      <div className={`page dark`}>
        <HeadSEO
          title="Agencia Shopify Valencia"
          description="Somos una agencia Shopify en Valencia especializada en desarrollo de Apps, temas, Headless, Migraciones, Scraping..."
          url="agencia-shopify/valencia"
        />
        <Navbar />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <Intro 
            lugar="Valencia"
          />
          <StrongPoints 
            lugar="Valencia"
          />
          <Methods 
            lugar="Valencia"
          />
          <Clients />
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
