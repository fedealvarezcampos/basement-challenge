import {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import Head from "next/head";

import Layout from "../components/layout";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
    const [modal, setModal] = useState(false);

    const [baseURL, setBaseURL] = useState<string>("");

    useEffect(() => {
        setBaseURL(window.location.origin);
    }, []);

    return (
        <>
            <Head>
                <title>Basement Supply</title>
                <meta content="Coding challenge for basement.studio." name="description" />
                <meta content="website" property="og:type" />
                <meta content={`${baseURL}/og.png`} property="og:image" />
                <meta content="Basement challenge" name="og:title" />
            </Head>
            <Layout modal={modal} setModal={setModal}>
                <Component setModal={setModal} {...pageProps} />
            </Layout>
        </>
    );
}
export default App;
