import React from 'react';
import Main from '../../components/Main/Main';
import OnlineLottie from '../../assets/lotties/online tutoring.json';
import Separator from '../../components/Separator/Separator';
import { ReactComponent as SubmitYourInquiry } from '../../assets/HowItWorks/Home/SubmitYourInquiry.svg';
import { ReactComponent as TeacherLocating } from '../../assets/HowItWorks/Home/TeacherLocating.svg';
import { ReactComponent as ProfileSharing } from '../../assets/HowItWorks/Home/ProfileSharing.svg';
import { ReactComponent as DemoConduction } from '../../assets/HowItWorks/Home/DemoConduction.svg';
import { ReactComponent as SuccessfulDeal } from '../../assets/HowItWorks/Home/SuccessfulDeal.svg';
import { ReactComponent as Tutors5000 } from '../../assets/Advantages/Home/Tutors5000.svg';
import { ReactComponent as OneOnOneTutoring } from '../../assets/Advantages/Home/OneOnOneTutoring.svg';
import { ReactComponent as AllGradesAndSubjects } from '../../assets/Advantages/Home/AllGradesAndSubjects.svg';
import { ReactComponent as MaleAndFemaleTutors } from '../../assets/Advantages/Home/MaleAndFemaleTutors.svg';
import { ReactComponent as TeachersOfYourChoice } from '../../assets/Advantages/Home/TeachersOfYourChoice.svg';
import { ReactComponent as FreeTrialClasses } from '../../assets/Advantages/Home/FreeTrialClasses.svg';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Advantages from '../../components/Advantages/Advantages';

export default function Online(props) {
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

  return (
    <>
      <Main
        heading={`Online ${props.keyword} Service`}
        description={`Hire a tutor/teacher for Online ${props.keyword} Service. Understand, learn and gain in-depth knowledge about a specific subject or subjects.`}
        limitWidth={true}
        lottie={OnlineLottie}
      />

      <Separator text={'How it works'} />
      <HowItWorks data={howItWorksData} />

      <Separator text={'Advantages'} />
      <Advantages data={advantagesData} />

      <Separator text={'Testimonials'} />
      <Separator text={'Announcements'} />
    </>
  );
}
