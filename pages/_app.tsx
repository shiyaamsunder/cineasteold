import { Layout } from "components/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout themeName="defaultTheme">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
