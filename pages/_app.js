import '../styles/globals.css'
import Head from "next/Head";


function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="keywords" content="titla, meta, nextjs"/>
                <meta name="author" content="Syamlal CM"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Beacon Tutors Pakistan</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
