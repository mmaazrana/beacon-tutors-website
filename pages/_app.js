import '../styles/globals.css';
import Head from 'next/Head';
// import { ReactComponent as Pattern } from '../assets/background pattern.svg';
import 'react-perfect-scrollbar/dist/css/styles.css';
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Loading from "../components/Loading/Loading";

function MyApp({Component, pageProps}) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    const getLayout = Component.getLayout || ((page) => page);

    const Pattern = dynamic(() => import('../assets/background pattern.svg').then(module => module.ReactComponent),);

    return getLayout(
        <>
            <Head>
                <meta charSet = "UTF-8"/>
                <meta name = "keywords" content = "titla, meta, nextjs"/>
                <meta name = "author" content = "Syamlal CM"/>
                <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <title>Beacon Tutors Pakistan</title>
            </Head>
            <div className = {'background'}>
                <Pattern viewBox = "0 0 100% 0"/>
            </div>
            <Loading loading = {loading}/>
            <Component className = {'body'} {...pageProps} />
        </>
    );
}

export default MyApp;
