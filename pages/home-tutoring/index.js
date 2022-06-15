import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import HomeLottie from "../../assets/lotties/home-tutoring.json"
import Separator from "../../components/Separator/Separator";

export default function HomeTutoring(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home Tutoring</title>
        <meta
          name="description"
          content="Meta description for the Home tutoring page"
        />
      </Head>
        <Main heading={"Home Tutoring Service"}
              description={"Hire a tutor/teacher for Home Tutoring Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects."}
              limitWidth={true}
              lottie={HomeLottie}/>
        <Separator text={"How it works"} />
        <Separator text={"Advantages"} />
        <Separator text={"Testimonials"} />
        <Separator text={"Announcements"} />
    </>
  );
}
