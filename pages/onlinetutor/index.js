import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function OnlineTutor(props) {

    // const Online = dynamic(() => import('../../components/Tutoring/Online'));


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
