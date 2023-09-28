import { Footer } from "@/components/Footer";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { NavBar } from "src/components/NavBar";
import { StyledApp } from "src/styles/appStyle";
import createEmotionCache from "src/styles/createEmotionCache";
import "src/styles/global.css";
import { theme } from "src/styles/theme";
import English from "../../content/compiled-locales/en.json";
import Spanish from "../../content/compiled-locales/es.json";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps): JSX.Element => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "es":
        return Spanish;
      case "en":
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  // (thuang): MUI related SSR setup
  // https://material-ui.com/guides/server-rendering/
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <IntlProvider locale={shortLocale} messages={messages}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </StyledApp>
        </ThemeProvider>
      </CacheProvider>
    </IntlProvider>
  );
};

export default App;
