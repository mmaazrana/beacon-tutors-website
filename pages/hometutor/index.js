import React from 'react';
import Head from 'next/head';
import Home from '../../components/Tutoring/Home';
import Layout from '../../components/Layouts/Layout';
import {
  fetchAnnouncements,
  fetchReviews,
} from '../../components/Functions/Functions';

export default function HomeTutor(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tutor</title>
        <meta
          name="description"
          content="Hire a tutor/teacher for Home Tutor Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects."
        />
      </Head>
      <Home
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
  await fetchAnnouncements(announcements, 'Home');
  return {
    props: { reviews, announcements },
    revalidate: 21600,
  };
}

HomeTutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
