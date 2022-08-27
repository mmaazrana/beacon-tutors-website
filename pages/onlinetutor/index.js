import React from 'react';
import Head from 'next/head';
import Online from '../../components/Tutoring/Online';
import Layout from '../../components/Layouts/Layout';
import {
  fetchAnnouncements,
  fetchReviews,
} from '../../components/Functions/Functions';

export default function OnlineTutor(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tutor</title>
        <meta
          name="description"
          content="Hire a tutor/teacher for Online Tutor Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects."
        />
      </Head>
      <Online
        keyword={'tutor'}
        announcements={props.announcements}
        reviews={props.reviews}
      />
    </>
  );
}

export async function getStaticProps() {
  const reviews = [];
  await fetchReviews(reviews);
  const announcements = [];
  await fetchAnnouncements(announcements, 'Online');
  return {
    props: { reviews, announcements },
    revalidate: 21600,
  };
}

OnlineTutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
