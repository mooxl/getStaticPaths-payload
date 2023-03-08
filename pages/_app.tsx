import Head from "next/head";
import "../tailwind.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>App</title>
      <meta name="description" content="Description" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
