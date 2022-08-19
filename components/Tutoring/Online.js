import React from 'react';
import Main from '../../components/Main/Main';
import OnlineLottie from '../../assets/lotties/online tutoring.json';
import Separator from '../../components/Separator/Separator';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Advantages from '../../components/Advantages/Advantages';
import SeparatorBox from "../Separator/SeparatorBox";
import Announcements from "../Announcements/Announcements";
import Reviews from "../Reviews/Reviews";
import dynamic from "next/dynamic";

export default function Online(props) {

  const SubmitYourInquiry = dynamic(() => import('../../assets/HowItWorks/Home/SubmitYourInquiry.svg').then(module => module.ReactComponent),);
  const TeacherLocating = dynamic(() => import('../../assets/HowItWorks/Home/TeacherLocating.svg').then(module => module.ReactComponent),);
  const ProfileSharing = dynamic(() => import('../../assets/HowItWorks/Home/ProfileSharing.svg').then(module => module.ReactComponent),);
  const DemoConduction = dynamic(() => import('../../assets/HowItWorks/Home/DemoConduction.svg').then(module => module.ReactComponent),);
  const SuccessfulDeal = dynamic(() => import('../../assets/HowItWorks/Home/SuccessfulDeal.svg').then(module => module.ReactComponent),);

  const MaleAndFemaleTutors = dynamic(() => import('../../assets/Advantages/Home/MaleAndFemaleTutors.svg').then(module => module.ReactComponent),);
  const Tutors5000 = dynamic(() => import('../../assets/Advantages/Home/Tutors5000.svg').then(module => module.ReactComponent),);
  const OneOnOneTutoring = dynamic(() => import('../../assets/Advantages/Home/OneOnOneTutoring.svg').then(module => module.ReactComponent),);
  const AllGradesAndSubjects = dynamic(() => import('../../assets/Advantages/Home/AllGradesAndSubjects.svg').then(module => module.ReactComponent),);
  const TeachersOfYourChoice = dynamic(() => import('../../assets/Advantages/Home/TeachersOfYourChoice.svg').then(module => module.ReactComponent),);
  const FreeTrialClasses = dynamic(() => import('../../assets/Advantages/Home/FreeTrialClasses.svg').then(module => module.ReactComponent),);

  const howItWorksData = [
    {
      image: <SubmitYourInquiry />,
      heading: 'Submit Your Inquiry',
      description:
        'Send us a brief description of your requirements by contacting on our official WhatsApp account or by giving us a call.',
    },
    {
      image: <TeacherLocating />,
      heading: 'Teacher Locating',
      description:
        'Our Teacher Assistance Department will start locating a perfect match that aligns with your requirements.',
    },
    {
      image: <ProfileSharing />,
      heading: 'Profile Sharing',
      description:
        'The company will compile a list of applications received and forward the most relevant profiles of teachers to be shortlisted for the introductory session.',
    },
    {
      image: <DemoConduction />,
      heading: 'Demo Conduction',
      description:
        'Have a free of cost 2-days trial class to determine if the tutor fulfils your requirements.',
    },
    {
      image: <SuccessfulDeal />,
      heading: 'Successful Deal',
      description:
        'Upon satisfactory demo/trial class the student/parent will pay the fee to start the regular classes',
    },
  ];

  const advantagesData = [
    {
      image: <Tutors5000 />,
      heading: '5000+ Tutors',
      description:
        'Thousands of tutors across the globe from all the educational backgrounds',
    },
    {
      image: <OneOnOneTutoring />,
      heading: `One-On-One Tutoring Program`,
      description:
        'No more group studies. Study in a one-on-one interactive environment.',
    },
    {
      image: <AllGradesAndSubjects />,
      heading: 'All Grades & Subjects',
      description:
        'Tutors from diverse educational backgrounds that cater to all grades and subjects',
    },
    {
      image: <MaleAndFemaleTutors />,
      heading: 'Male & Female Tutors',
      description:
        'Hire a tutor as per your gender preference for any grade or subject in your city',
    },
    {
      image: <TeachersOfYourChoice />,
      heading: 'Teacher Of Your Choice',
      description:
        'Select a teacher of your choice by looking at their academic profiles.',
    },
    {
      image: <FreeTrialClasses />,
      heading: '2-Days Free Trial Class',
      description:
        'Have a free of cost demo class to determine if the tutor fulfils your requirements',
    },
  ];

    let staticAnnouncements = [
        {
            title: "Teacher required for online tutor service for O-Levels Biology",
            days: 5,
            budget: 25000,
            time: 1,
            id: 1,
        },
        {
            title: "Teacher required for online tutor service for A-Levels Physics ",
            days: 5,
            budget: 30000,
            time: 1,
            id: 2,
        },
        {
            title: "Teacher required for online tutor service for 6th class Maths, Science and English ",
            days: 5,
            budget: 20000,
            time: 2,
            id: 3,
        }
    ]

    const announcements = props.announcements.length > 0 ? props.announcements : staticAnnouncements

  return (
    <>
      <Main
        heading={`Online ${props.keyword.charAt(0).toUpperCase()+props.keyword.slice(1)} Service`}
        description={`Hire a tutor/teacher for Online ${props.keyword} Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects.`}
        limitWidth={true}
        lottie={OnlineLottie}
      />

      <Separator text = {'How it'} underLineText={'works'}/>
      <HowItWorks data={howItWorksData} />

      <Separator text={'Advantages'} />
      <Advantages data={advantagesData} />

      <SeparatorBox text={'Reviews'} >
        <Reviews data={props.reviews}/>
      </SeparatorBox>

      <SeparatorBox text={'Announcements'} >
        <Announcements keyword={props.keyword} data={announcements} />
      </SeparatorBox>


    </>
  );
}
