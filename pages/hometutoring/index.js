import React from 'react';
import Head from 'next/Head';
import Home from '../../components/Tutoring/Home';
import Layout from '../../components/Layouts/Layout';

export default function HomeTutoring(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tutoring</title>
        <meta
          name="description"
          content="Meta description for the Home Tutoring page"
        />
      </Head>
      <Home keyword={'Tutoring'} />
    </>
  );
}

HomeTutoring.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
