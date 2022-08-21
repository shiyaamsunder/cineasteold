import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";

import type { AppRouter } from "./api/trpc/[trpc]";

import { Navbar, Layout } from "@components";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <Layout themeName="defaultTheme">
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnMount: false,
          },
        },
      },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  // ssr: true,
})(MyApp);
