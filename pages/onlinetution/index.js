import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function OnlineTution(props) {

    // const Online = dynamic(() => import('../../components/Tutoring/Online'));

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
