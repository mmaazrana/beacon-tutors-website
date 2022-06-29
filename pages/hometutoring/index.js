import React from 'react';
import Head from 'next/Head';
import Home from '../../components/Tutoring/Home';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function HomeTutoring(props) {

    // const Home = dynamic(() => import('../../components/Tutoring/Home'));


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
