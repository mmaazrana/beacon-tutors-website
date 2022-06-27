import '../styles/globals.css';
import Head from 'next/Head';
// import { ReactComponent as Pattern } from '../assets/background pattern.svg';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const Pattern = dynamic(() => import('../assets/background pattern.svg').then(module => module.ReactComponent),);

  return getLayout(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beacon Tutors Pakistan</title>
      </Head>
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      {/* <PerfectScrollbar> */}
        <Component className={'body'} {...pageProps} />
      {/* </PerfectScrollbar> */}
    </>
  );
}

export default MyApp;
