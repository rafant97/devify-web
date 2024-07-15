import "../styles/globals.scss";
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  <GoogleAnalytics gaId="G-D94E9CQX8T" />
  return <Component {...pageProps} />;
}

export default MyApp;
