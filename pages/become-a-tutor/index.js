import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import BecomeLottie from "../../assets/lotties/be a tutor final.json"
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
import Layout from '../../components/Layouts/Layout';

export default function BecomeATutor(props) {

    const howItWorksData = [{
        image: <SubmitYourInquiry/>,
        heading: "Contact Our Communication Department",
        description: "Contact our communication department and ask them to connect you with the teacher assistance department.",
    }, {
        image: <TeacherLocating/>,
        heading: "Join Our Official Group",
        description: "Join one of our teacher’s group to see what sort of services we provide. The group will enable you to check the received tuition inquiries of the students.",
    }, {
        image: <ProfileSharing/>,
        heading: "Apply for Registration",
        description: "Once everything is cleared out to you and you find yourself a perfect match for our services, apply for registration by asking your group admin the process of that.",
    }, {
        image: <DemoConduction/>,
        heading: "Profile Verification",
        description: "Once a candidate fulfils all the requirements of registration process than it takes around 7 business days for their profile to gets verified and completed from our end.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Start Applying",
        description: "Once your process is completed, we’ll let you join our registered tutors group and you can start applying on tuitions that matches your interest.",
    }]
    const advantagesData = [{
        image: <MaleAndFemaleTutors/>,
        heading: "Teach as Your Preference",
        description: "Our network of diverse services will enable one to teach the grades and subjects as per their preference since we cater to all grades and subjects.",
    }, {
        image: <Tutors5000/>,
        heading: "Part-Time Flexible Hours",
        description: "Work as per your availability by selecting a tuition which perfectly fits your available time slots.",
    }, {
        image: <OneOnOneTutoring/>,
        heading: "Earn More Than a Full-time Job",
        description: "A best part-time job that enables one to earn more than a full-time job by working couple of hours.",
    }]


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
        <Separator text={"How it works"}/>
        <Separator text={"Advantages"}/>
        <Separator text={"Testimonials"}/>
    </>);
}

BecomeATutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

