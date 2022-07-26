import React from 'react';
import Head from 'next/head';
import Main from '../../components/Main/Main';
import BecomeLottie from '../../assets/lotties/be a tutor final.json';
import Separator from '../../components/Separator/Separator';

import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Advantages from '../../components/Advantages/Advantages';
import dynamic from "next/dynamic";

import Layout from '../../components/Layouts/Layout';
import SeparatorBox from "../../components/Separator/SeparatorBox";
import Reviews from "../../components/Reviews/Reviews";
import {fetchAnnouncements, fetchReviews} from "../../components/Functions/Functions";

// const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function WorkAsTutor(props) {

  const CustomerSupport = dynamic(() => import('../../assets/Advantages/WritingService/CustomerSupport.svg').then(module => module.ReactComponent),);
  const JoinOurOfficialGroup = dynamic(() => import('../../assets/HowItWorks/WorkAsTutor/JoinOurOfficialGroup.svg').then(module => module.ReactComponent),);
  const ApplyForRegistration = dynamic(() => import('../../assets/HowItWorks/WorkAsTutor/ApplyForRegistration.svg').then(module => module.ReactComponent),);
  const ProfileVerification = dynamic(() => import('../../assets/HowItWorks/WorkAsTutor/ProfileVerification.svg').then(module => module.ReactComponent),);
  const StartApplying = dynamic(() => import('../../assets/HowItWorks/WorkAsTutor/StartApplying.svg').then(module => module.ReactComponent),);
  const BeATutorOfYourChoice = dynamic(() => import('../../assets/Advantages/WorkAsTutor/BeATutorOfYourChoice.svg').then(module => module.ReactComponent),);
  const TeachAsYourPreference = dynamic(() => import('../../assets/Advantages/WorkAsTutor/TeachAsYourPreference.svg').then(module => module.ReactComponent),);
  const PartTimeFlexibleHours = dynamic(() => import('../../assets/Advantages/WorkAsTutor/PartTimeFlexibleHours.svg').then(module => module.ReactComponent),);
  const EarnMoreThanAFullTimeJob = dynamic(() => import('../../assets/Advantages/WorkAsTutor/EarnMoreThanAFullTimeJob.svg').then(module => module.ReactComponent),);

  // const Main = dynamic(() => import('../../components/Main/Main'));
  // const Separator = dynamic(() => import('../../components/Separator/Separator'));
  // const HowItWorks = dynamic(() => import('../../components/HowItWorks/HowItWorks'));
  // const Advantages = dynamic(() => import('../../components/Advantages/Advantages'));


  const howItWorksData = [
    {
      image: <CustomerSupport />,
      heading: 'Contact Our Communication Department',
      description:
        'Contact our communication department and ask them to connect you with the teacher assistance department.',
    },
    {
      image: <JoinOurOfficialGroup />,
      heading: 'Join Our Official Group',
      description:
        "Join one of our teacher's group to see what sort of services we provide. The group will enable you to check the received tuition inquiries of the students.",
    },
    {
      image: <ApplyForRegistration />,
      heading: 'Apply for Registration',
      description:
        'Once everything is cleared out to you and you find yourself a perfect match for our services, apply for registration by asking your group adminpanel the process of that.',
    },
    {
      image: <ProfileVerification />,
      heading: 'Profile Verification',
      description:
        'Once a candidate fulfils all the requirements of registration process than it takes around 7 business days for their profile to gets verified and completed from our end.',
    },
    {
      image: <StartApplying />,
      heading: 'Start Applying',
      description:
        "Once your process is completed, we'll let you join our registered tutors group and you can start applying on tuitions that matches your interest.",
    },
  ];

  const advantagesData = [
    {
      image: <BeATutorOfYourChoice />,
      heading: 'Be A Tutor of Your Choice',
      description:
        'Our vast area of services enables one to teach and work on multiple niches like home tuitions, online tuitions and assignments/content writing services.',
    },
    {
      image: <TeachAsYourPreference />,
      heading: 'Teach as Your Preference',
      description:
        'Our network of diverse services will enable one to teach the grades and subjects as per their preference since we cater to all grades and subjects.',
    },
    {
      image: <PartTimeFlexibleHours />,
      heading: 'Part-Time Flexible Hours',
      description:
        'Work as per your availability by selecting a tuition which perfectly fits your available time slots.',
    },
    {
      image: <EarnMoreThanAFullTimeJob />,
      heading: 'Earn More Than a Full-time Job',
      description:
        'A best part-time job that enables one to earn more than a full-time job by working couple of hours.',
    },
  ];

  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Become A Tutor</title>
        <meta
          name="description"
          content="Meta description for the Work As Tutor page"
        />
      </Head>
      <Main
        heading={'Be A Tutor'}
        description={
          'Start working as a part-time tutor for a promising opportunity to transform your teaching career and provide academic support in the form of lectures, learning & educational content to students across globe.'
        }
        lottie={BecomeLottie}
      />

      <Separator text = {'How it'} underLineText={'works'}/>

      <HowItWorks data={howItWorksData} />

      <Separator text={'Advantages'} />
      <Advantages data={advantagesData} />
      <SeparatorBox text = {'Reviews'}> <Reviews data = {props.reviews}/> </SeparatorBox>

    </>
  );
}

export async function getStaticProps() {
  const reviews = []
  await fetchReviews(reviews)
  return {
    props: {reviews},
    revalidate: 21600,
  };
}

WorkAsTutor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
