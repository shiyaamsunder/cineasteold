import { Layout } from "components/layout";
import { Navbar } from "components/navbar";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout themeName="defaultTheme">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
