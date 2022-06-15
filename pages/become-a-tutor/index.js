import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import BecomeLottie from "../../assets/lotties/be a tutor final.json"
import Separator from "../../components/Separator/Separator";
import Layout from '../../components/Layouts/Layout';

export default function BecomeATutor(props) {
    return (<>
        <Head>
            <title>Beacon Tutors Pakistan - Become a tutor</title>
            <meta
                name="description"
                content="Meta description for the become a tutor page"
            />
        </Head>
        <Main heading={"Be A Tutor"}
              description={"Start working as a part-time tutor for a promising opportunity to transform your teaching career and provide academic support in the form of lectures, learning & educational content to students across globe."}
              lottie={BecomeLottie}/>
        <Separator text={"How it works"} />
        <Separator text={"Advantages"} />
        <Separator text={"Testimonials"} />
    </>);
}

BecomeATutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

