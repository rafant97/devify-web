import { useState } from "react";
import Head from "next/head";
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

export default function Home() {
  
  return (
    <div className={`page dark`}>
      <Head>
        <title>Devify - Shopify Agency</title>
        <meta name="description" 
        content="Need SHOPIFY HEADLESS for your bussiness? We offer you the best selling platform available in the market" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  );
}
