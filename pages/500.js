import Head from 'next/Head';
import Error500Lottie from '../assets/lotties/500-server-error.json';
import Error from '../components/Error/Error';
import Layout from '../components/Layouts/Layout';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 Error - Beacon Tutors Pakistan </title>
        <meta
          name="description"
          content="Meta description for the 500 Interval Server Error page"
        />
      </Head>
      <Error code="500" error="Internal Server Error" lottie={Error500Lottie} />
    </>
  );
}

Custom500.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
