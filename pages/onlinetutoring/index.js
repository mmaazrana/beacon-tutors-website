import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function OnlineTutoring(props) {

    // const Online = dynamic(() => import('../../components/Tutoring/Online'));


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
