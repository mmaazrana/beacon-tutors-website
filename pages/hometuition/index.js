import React from 'react';
import Head from 'next/head';
import Home from '../../components/Tutoring/Home';
import Layout from '../../components/Layouts/Layout';
import {
  fetchAnnouncements,
  fetchReviews,
} from '../../components/Functions/Functions';

export default function HomeTution(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tuition</title>
        <meta
          name="description"
          content="Hire a tutor/teacher for Home Tuition Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects."
        />
      </Head>
      <Home keyword={'tuition'}  announcements = {props.announcements}  reviews={props.reviews} />
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

HomeTution.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
