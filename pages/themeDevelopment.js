import Head from "next/head"
import {
    GradientCircleTop,
    GradientCircleMd,
  } from "../components/GradientCircle";

const themeDevelopment = () => {
  return (
    <>
      <Head>
        <title>Theme Development</title>
      </Head>
      <main className="main">
        <GradientCircleTop />
        <GradientCircleMd />
      </main>
    </>
  )
}

export default themeDevelopment
