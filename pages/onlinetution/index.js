import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
import Layout from '../../components/Layouts/Layout';

export default function OnlineTution(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tution</title>
        <meta
          name="description"
          content="Meta description for the Online Tution page"
        />
      </Head>
      <Online keyword={'Tution'} />
    </>
  );
}

OnlineTution.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
