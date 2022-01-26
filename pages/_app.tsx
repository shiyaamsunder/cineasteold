import { StyledApp } from "@components/styled";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  );
}

export default MyApp;
