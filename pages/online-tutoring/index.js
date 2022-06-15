import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import OnlineLottie from "../../assets/lotties/online tutoring.json"
import Separator from "../../components/Separator/Separator";

export default function OnlineTutoring(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Online Tutoring</title>
        <meta
          name="description"
          content="Meta description for the online tutoring page"
        />
      </Head>
        <Main heading={"Online Tutoring Service"}
              description={"Hire a tutor/teacher for Online Tutoring Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects."}
              limitWidth={true}
              lottie={OnlineLottie}/>
        <Separator text={"How it works"} />
        <Separator text={"Advantages"} />
        <Separator text={"Testimonials"} />
        <Separator text={"Announcements"} />
    </>
  );
}
