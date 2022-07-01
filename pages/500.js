import Head from 'next/Head';
import Error500Lottie from '../assets/lotties/404-notfound.json';
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
      <Error error="500 - Server-side error occurred" lottie={Error500Lottie} />
    </>
  );
}

Custom500.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
