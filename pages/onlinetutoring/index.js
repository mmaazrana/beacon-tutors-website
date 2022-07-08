import React from 'react';
import Head from 'next/Head';
import Online from '../../components/Tutoring/Online';
// import dynamic from "next/dynamic";
import Layout from '../../components/Layouts/Layout';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";
// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function OnlineTutoring(props) {

    // const Online = dynamic(() => import('../../components/Tutoring/Online'));


    return (<>
            <Head>
                <title>Beacon Tutors Pakistan - Online Tutoring</title>
                <meta
                    name = "description"
                    content = "Meta description for the Online Tutoring page"
                />
            </Head> <Online keyword = {'Tutoring'} announcements = {props.announcements} reviews = {props.reviews}/>
        </>);
}

export async function getStaticProps() {
    let announcements = [];
    try {
        const q = query(
            collection(db, 'announcements'),
            where('page', '==', 'Online'),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            announcements.push({
                ...doc.data(), id: doc.id, timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
            });
        });
        for (let i = announcements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [announcements[i], announcements[j]] = [announcements[j], announcements[i]];
        }
    } catch (error) {
        console.log(error.code, error.message);
    }
    console.log("\n\n\n announcements start \n\n\n");
    console.log(announcements);
    console.log("\n\n\n announcements end \n\n\n");
    return {
        props: {announcements},
        revalidate: 600,
    };
}

OnlineTutoring.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
