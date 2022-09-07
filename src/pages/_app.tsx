import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Navbar, Layout } from "@components";
import { AuthProvider, supabase } from "@utils";

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <Layout themeName="defaultTheme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider supabase={supabase}>
          <Navbar />
          <Component {...pageProps} />
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
}
