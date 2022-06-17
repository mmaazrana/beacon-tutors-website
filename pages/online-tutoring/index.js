import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import OnlineLottie from "../../assets/lotties/online tutoring.json"
import Separator from "../../components/Separator/Separator";
import {ReactComponent as SubmitYourInquiry} from "../../assets/HowItWorks/Home/SubmitYourInquiry.svg";
import {ReactComponent as TeacherLocating} from "../../assets/HowItWorks/Home/TeacherLocating.svg";
import {ReactComponent as ProfileSharing} from "../../assets/HowItWorks/Home/ProfileSharing.svg";
import {ReactComponent as DemoConduction} from "../../assets/HowItWorks/Home/DemoConduction.svg";
import {ReactComponent as SuccessfulDeal} from "../../assets/HowItWorks/Home/SuccessfulDeal.svg";
import {ReactComponent as MaleAndFemaleTutors} from "../../assets/Advantages/Home/MaleAndFemaleTutors.svg";
import {ReactComponent as Tutors5000} from "../../assets/Advantages/Home/Tutors5000.svg";
import {ReactComponent as OneOnOneTutoring} from "../../assets/Advantages/Home/OneOnOneTutoring.svg";
import {ReactComponent as AllGradesAndSubjects} from "../../assets/Advantages/Home/AllGradesAndSubjects.svg";
import {ReactComponent as TeachersOfYourChoice} from "../../assets/Advantages/Home/TeachersOfYourChoice.svg";
import {ReactComponent as FreeTrialClasses} from "../../assets/Advantages/Home/FreeTrialClasses.svg";


export default function OnlineTutoring(props) {

  const howItWorksData = [{
    image: <SubmitYourInquiry/>,
    heading: "Submit Your Inquiry",
    description: "Send us a brief description of your requirements by contacting on our official WhatsApp account or by giving us a call.",
  }, {
    image: <TeacherLocating/>,
    heading: "Teacher Locating",
    description: "Our Teacher Assistance Department will start locating a perfect match that aligns with your requirements.",
  }, {
    image: <ProfileSharing/>,
    heading: "Profile Sharing",
    description: "The company will compile a list of applications received and forward the most relevant profiles of teachers to be shortlisted for the introductory session.",
  }, {
    image: <DemoConduction/>,
    heading: "Demo Conduction",
    description: "Have a free of cost 2-days trial class to determine if the tutor fulfils your requirements.",
  }, {
    image: <SuccessfulDeal/>,
    heading: "Successful Deal",
    description: "Upon satisfactory demo/trial class the student/parent will pay the fee to start the regular classes",
  }]
  const advantagesData = [{
    image: <MaleAndFemaleTutors/>,
    heading: "Male & Female Tutors",
    description: "Hire a tutor as per your gender preference for any grade and any subject in your city",
  }, {
    image: <Tutors5000/>,
    heading: "5000+\n" + "Teachers",
    description: "Thousands of tutors across the globe from all the educational backgrounds",
  }, {
    image: <OneOnOneTutoring/>,
    heading: "One-On-One Tutoring",
    description: "No more group studies. Study in a one-on-one interactive environment.",
  }, {
    image: <AllGradesAndSubjects/>,
    heading: "All Grades & Subjects",
    description: "Tutors from diverse educational backgrounds that cater to all grades and subjects.",
  }, {
    image: <TeachersOfYourChoice/>,
    heading: "Teacher of Your Choice",
    description: "Select a teacher of your choice by looking at their academic profiles.",
  }, {
    image: <FreeTrialClasses/>,
    heading: "2-Days Free Trial Class",
    description: "Have a free of cost demo class to determine if the tutor fulfils your requirements.",
  }]

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
