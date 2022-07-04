import '../styles/globals.css';
import Head from 'next/Head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

function MyApp({ Component, pageProps, reviews }) {
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
      <Loading loading={loading} />
      <Toaster
        position="bottom-right"
        containerStyle={{
          zIndex: '10000001',
        }}
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
      <Component className={'body'} reviews={reviews} {...pageProps}  />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, context }) => {
  let reviews = [];
  let pageProps = {};

  const querySnapshot = await getDocs(collection(db, 'reviews'));
  querySnapshot.forEach((doc) => {
    reviews.push({
      ...doc.data(),
      id: doc.id,
      timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
    });
  });
  // if (Component.getInitialProps) {
    // pageProps = await Component.getInitialProps(context);
  // }
  return {
    pageProps,
    reviews,
  };
}

export default MyApp;
