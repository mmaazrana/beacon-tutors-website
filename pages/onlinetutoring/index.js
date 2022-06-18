import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
import Layout from '../../components/Layouts/Layout';

export default function OnlineTutoring(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tutoring</title>
        <meta
          name="description"
          content="Meta description for the Online Tutoring page"
        />
      </Head>
      <Online keyword={'Tutoring'} />
    </>
  );
}

OnlineTutoring.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
