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

export default function barcelona() {

  return (
    <>
      
      <div className={`page dark`}>
        <HeadSEO
          title="Agencia Shopify Barcelona"
          description="Somos una agencia Shopify en Barcelona especializada en desarrollo de Apps, temas, "
          url="agencia-shopify/barcelona"
        />
        <Navbar />
        <main className="main">
          <GradientCircleTop />
          <GradientCircleMd />
          <Intro 
            lugar="Barcelona"
          />
          <StrongPoints 
            lugar="Barcelona"
          />
          <Methods 
            lugar="Barcelona"
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
