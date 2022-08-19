import "../styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Loading from "../components/Loading/Loading";
import SwiperCore, {Autoplay} from "swiper";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const Toaster = dynamic(() => import("react-hot-toast").then((module) => module.Toaster));

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loader = document.getElementById("globalLoader");
            if (loader) loader.style.display = "none";
        }
    }, []);

    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<>
        <Head>
            <meta charSet = "UTF-8"/>
            <link rel = "shortcut icon" href = "/favicon.ico"/>
            <link
                rel = "apple-touch-icon"
                sizes = "120x120"
                href = "/apple-touch-icon.png"
            />
            <link
                rel = "icon"
                type = "image/png"
                sizes = "32x32"
                href = "/favicon-32x32.png"
            />
            <link
                rel = "icon"
                type = "image/png"
                sizes = "16x16"
                href = "/favicon-16x16.png"
            />
            <meta name = "keywords" content = "titla, meta, nextjs"/>
            <meta name = "author" content = "Syamlal CM"/>
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
            <title>Beacon Tutors Pakistan</title>
        </Head> <Loading loading = {loading}/> <Toaster
        position = "bottom-right"
        containerStyle = {{
            zIndex: "10000001",
        }}
        toastOptions = {{
            className: "toast", duration: 5000, success: {
                iconTheme: {
                    primary: "#4FC3B1",
                },
            }, error: {
                iconTheme: {
                    primary: "#FF6F66",
                },
            }, style: {
                zIndex: "10000000 !important",
            },
        }}
    /> <Component className = {"body"} {...pageProps} />
    </>);
}

export default MyApp;
