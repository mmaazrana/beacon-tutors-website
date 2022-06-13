import '../styles/globals.css';
import Head from 'next/Head';
import Nav from '../components/Nav/Nav';
import { ReactComponent as Pattern } from '../assets/background pattern.svg';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beacon Tutors Pakistan</title>
      </Head>
      <Nav />
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
