import React from 'react';
import Head from 'next/Head';
import Home from '../../components/Tutoring/Home';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";
import {fetchAnnouncements, fetchReviews} from "../../components/Functions/Functions";
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function HomeTution(props) {

    // const Home = dynamic(() => import('../../components/Tutoring/Home'));


    return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tution</title>
        <meta
          name="description"
          content="Meta description for the Home Tution page"
        />
      </Head>
      <Home keyword={'tution'}  announcements = {props.announcements}  reviews={props.reviews} />
    </>
  );
}

export async function getStaticProps() {
    const reviews = []
    await fetchReviews(reviews)
    const announcements = []
    await fetchAnnouncements(announcements,'Home')
    return {
        props: {reviews,announcements},
        revalidate: 21600,
    };
}

HomeTution.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
