import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../firebase";
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function OnlineTutoring(props) {

    // const Online = dynamic(() => import('../../components/Tutoring/Online'));


    return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tutoring</title>
        <meta
          name="description"
          content="Meta description for the Online Tutoring page"
        />
      </Head>
      <Online keyword={'Tutoring'} announcements={props.announcements} reviews={props.reviews} />
    </>
  );
}

export async function getServerSideProps() {
    let announcements = [];
    try {
        const q = query(
            collection(db, 'announcements'),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            announcements.push({
                ...doc.data(),
                id: doc.id,
                timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
            });
        });
    } catch (error) {
        console.log(error.code, error.message);
    }
    console.log(announcements);
    return {
        props: { announcements },
    };
}

OnlineTutoring.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
