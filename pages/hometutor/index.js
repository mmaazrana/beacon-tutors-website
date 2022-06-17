import React from 'react';
import Head from 'next/Head';
import Home from '../../components/Tutoring/Home';
import Layout from '../../components/Layouts/Layout';

export default function HomeTutor(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tutor</title>
        <meta
          name="description"
          content="Meta description for the Home Tutor page"
        />
      </Head>
      <Home keyword={'Tutor'} />
    </>
  );
}

HomeTutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
