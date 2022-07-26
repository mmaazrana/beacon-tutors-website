import Head from 'next/head';
import Error404Lottie from '../assets/lotties/404-not-found.json';
import Error from '../components/Error/Error';
import Layout from '../components/Layouts/Layout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Error - Beacon Tutors Pakistan </title>
        <meta
          name="description"
          content="Meta description for the 404 Page Not Found page"
        />
      </Head>
      <Error error="Page Not Found" lottie={Error404Lottie} />
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
