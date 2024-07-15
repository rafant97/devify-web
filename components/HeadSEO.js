import Head from "next/head"

export default function HeadSEO({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta hhttpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
      <meta name="description" property="description" content={description}/>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {/* TODO: ADD URL WHEN THE DOMAIN IS BOUGHT */}
      <meta property="og:url" content={`https://www.devify.tech/${url}`} />
      {/* TODO: ADD LOGO WHEN WE HAVE ONE */}
      <meta property="og:image" content={'logo.png'} />
      <meta property="og:description" 
        content={description} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Agencia Shopify" />
    </Head>
  )
}
