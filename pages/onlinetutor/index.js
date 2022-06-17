import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
import Layout from '../../components/Layouts/Layout';

export default function OnlineTutor(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tutor</title>
        <meta
          name="description"
          content="Meta description for the Online Tutor page"
        />
      </Head>
      <Online keyword={'Tutor'} />
    </>
  );
}

OnlineTutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
