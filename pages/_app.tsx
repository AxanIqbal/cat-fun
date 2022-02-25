import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import createEmotionCache from "../services/createEmotionCache";
import {EmotionCache} from "@emotion/cache";
import theme from "../services/theme";
import {ThemeProvider} from "@mui/material";
import {CacheProvider} from "@emotion/react";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/*<CssBaseline/>*/}
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp
