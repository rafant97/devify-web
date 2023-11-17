import { useState } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import {
  GradientCircleTop,
  GradientCircleMd,
} from "../components/GradientCircle";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Methods from "../components/Methods";
import Pricing from "../components/Pricing";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  const [mode, setMode] = useState(true);
  return (
    <div className={`page ${!mode && "light"} dark`}>
      <Head>
        <title>Shopify Headless Agency</title>
        <meta name="description" 
        content="Need SHOPIFY HEADLESS for your bussiness? We offer you the best selling platform available in the market" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Navbar setMode={setMode} mode={mode} />
      <main className="main">
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <Services />
        <Methods />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}
