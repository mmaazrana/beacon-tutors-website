import React from 'react';
import Head from 'next/head';
import Online from '../../components/Tutoring/Online';
import Layout from '../../components/Layouts/Layout';
import {fetchAnnouncements, fetchReviews} from "../../components/Functions/Functions";

export default function OnlineTution(props) {
    return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tuition</title>
        <meta
          name="description"
          content="Meta description for the Online Tuition page"
        />
      </Head>
      <Online keyword={'tuition'} announcements = {props.announcements} reviews={props.reviews} />
    </>
  );
}

export async function getStaticProps() {
    const reviews = []
    await fetchReviews(reviews)
    const announcements = []
    await fetchAnnouncements(announcements,'Online')
    return {
        props: {reviews,announcements},
        revalidate: 21600,
    };
}

OnlineTution.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
