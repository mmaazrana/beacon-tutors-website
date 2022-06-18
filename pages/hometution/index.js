import React from 'react';
import Head from 'next/Head';
import Home from '../../components/Tutoring/Home';
import Layout from '../../components/Layouts/Layout';

export default function HomeTution(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tution</title>
        <meta
          name="description"
          content="Meta description for the Home Tution page"
        />
      </Head>
      <Home keyword={'Tution'} />
    </>
  );
}

HomeTution.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
