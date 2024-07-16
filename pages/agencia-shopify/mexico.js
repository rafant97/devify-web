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

export default function madrid() {

  return (
    <>
      
      <div className={`page dark`}>
        <HeadSEO
          title="Agencia Shopify Mexico"
          description="Somos una agencia Shopify de Madrid especializada en desarrollo de Apps, temas, "
          url=""
        />
        <Navbar />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <Intro 
            lugar="Mexico"
          />
          <StrongPoints 
            lugar="Mexico"
          />
          <Methods 
            lugar="Mexico"
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
