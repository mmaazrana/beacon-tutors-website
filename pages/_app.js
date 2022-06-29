import '../styles/globals.css';
import Head from 'next/Head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const Toaster = dynamic(() =>
    import('react-hot-toast').then((module) => module.Toaster)
  );

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beacon Tutors Pakistan</title>
      </Head>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'toast',
          success: {
            iconTheme: {
              primary: '#4FC3B1',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF6F66',
            },
          },
          style: {
            zIndex: '10000000 !important',
          },
        }}
      />
      <Loading loading={loading} />
      <Component className={'body'} {...pageProps}></Component>
    </>
  );
}

export default MyApp;
