import type {AppProps} from "next/app";
import Head from "next/head";

import Layout from "../components/layout";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Basement Supply</title>
                <meta content="Coding challenge for basement.studio." name="description" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
export default App;
