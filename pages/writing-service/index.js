import React from 'react';
import Head from 'next/Head';
import Main from '../../components/Main/Main';
import WritingLottie from '../../assets/lotties/writing-service.json';
import Separator from '../../components/Separator/Separator';
import Layout from '../../components/Layouts/Layout';

export default function WritingService(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Writing Service</title>
        <meta
          name="description"
          content="Meta description for the Writing Service page"
        />
      </Head>
      <Main
        heading={'Assignments & Content Writing Services'}
        description={
          'Hire professional writer for any niche to work efficiently on your writing work of multiple types like Assignments, Research Paper, Thesis & Dissertations, Essays etc.'
        }
        limitWidth={true}
        lottie={WritingLottie}
      />
      <Separator text={'How it works'} />
      <Separator text={'Advantages'} />
      <Separator text={'Testimonials'} />
      <Separator text={'Announcements'} />
    </>
  );
}

WritingService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
