import "../styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Loading from "../components/Loading/Loading";
import SwiperCore, {Autoplay} from "swiper";
import Script from "next/script";

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
        <Script
            id="gtm-script"
            strategy = "afterInteractive"
            dangerouslySetInnerHTML = {{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6Q2KQK');`,
            }}
        />
        <noscript
            dangerouslySetInnerHTML = {{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6Q2KQK"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
        />
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
