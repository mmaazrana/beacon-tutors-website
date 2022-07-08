import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";
import {fetchAnnouncements, fetchReviews} from "../../components/Functions/Functions";
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
      <Online keyword={'tution'} announcements = {props.announcements} reviews={props.reviews} />
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
