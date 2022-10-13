import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Variables } from "../styles/variables";
import { GlobalStyles } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Variables}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
