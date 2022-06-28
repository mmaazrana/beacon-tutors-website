import '../styles/globals.css';
import Head from 'next/Head';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const Toaster = dynamic(() =>
    import('react-hot-toast').then((module) => module.Toaster)
  );

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
        }}
      />
      <Component className={'body'} {...pageProps}></Component>
    </>
  );
}

export default MyApp;
