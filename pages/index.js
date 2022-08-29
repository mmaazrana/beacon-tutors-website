// beacontutorspk.com

import Head from 'next/head';
import React, { useRef } from 'react';
import MainLottie from '../assets/lotties/main-page.json';
import Main from '../components/Main/Main';
import Separator from '../components/Separator/Separator';
import Service from '../components/Service/Service';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Advantages from '../components/Advantages/Advantages';
import Reviews from '../components/Reviews/Reviews';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SeparatorBox from '../components/Separator/SeparatorBox';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchReviews } from '../components/Functions/Functions';

export default function Home(props) {
  const [play, setPlay] = useState(true);

  const HomeTutoringSvg = dynamic(() =>
    import('../assets/Services/home-tutoring.svg').then(
      (module) => module.ReactComponent
    )
  );
  const OnlineTutoringSvg = dynamic(() =>
    import('../assets/Services/online-tutoring.svg').then(
      (module) => module.ReactComponent
    )
  );
  const WritingServiceSvg = dynamic(() =>
    import('../assets/Services/writing-service.svg').then(
      (module) => module.ReactComponent
    )
  );

  const SubmitYourInquiry = dynamic(() =>
    import('../assets/HowItWorks/Home/SubmitYourInquiry.svg').then(
      (module) => module.ReactComponent
    )
  );
  const TeacherLocating = dynamic(() =>
    import('../assets/HowItWorks/Home/TeacherLocating.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ProfileSharing = dynamic(() =>
    import('../assets/HowItWorks/Home/ProfileSharing.svg').then(
      (module) => module.ReactComponent
    )
  );
  const DemoConduction = dynamic(() =>
    import('../assets/HowItWorks/Home/DemoConduction.svg').then(
      (module) => module.ReactComponent
    )
  );
  const SuccessfulDeal = dynamic(() =>
    import('../assets/HowItWorks/Home/SuccessfulDeal.svg').then(
      (module) => module.ReactComponent
    )
  );

  const MaleAndFemaleTutors = dynamic(() =>
    import('../assets/Advantages/Home/MaleAndFemaleTutors.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Tutors5000 = dynamic(() =>
    import('../assets/Advantages/Home/Tutors5000.svg').then(
      (module) => module.ReactComponent
    )
  );
  const OneOnOneTutoring = dynamic(() =>
    import('../assets/Advantages/Home/OneOnOneTutoring.svg').then(
      (module) => module.ReactComponent
    )
  );
  const AllGradesAndSubjects = dynamic(() =>
    import('../assets/Advantages/Home/AllGradesAndSubjects.svg').then(
      (module) => module.ReactComponent
    )
  );
  const TeachersOfYourChoice = dynamic(() =>
    import('../assets/Advantages/Home/TeachersOfYourChoice.svg').then(
      (module) => module.ReactComponent
    )
  );
  const FreeTrialClasses = dynamic(() =>
    import('../assets/Advantages/Home/FreeTrialClasses.svg').then(
      (module) => module.ReactComponent
    )
  );

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
      image: <MaleAndFemaleTutors />,
      heading: 'Male & Female Tutors',
      description:
        'Hire a tutor as per your gender preference for any grade and any subject in your city',
    },
    {
      image: <Tutors5000 />,
      heading: '5000+\n' + 'Teachers',
      description:
        'Thousands of tutors across the globe from all the educational backgrounds',
    },
    {
      image: <OneOnOneTutoring />,
      heading: 'One-On-One Tutoring',
      description:
        'No more group studies. Study in a one-on-one interactive environment.',
    },
    {
      image: <AllGradesAndSubjects />,
      heading: 'All Grades & Subjects',
      description:
        'Tutors from diverse educational backgrounds that cater to all grades and subjects.',
    },
    {
      image: <TeachersOfYourChoice />,
      heading: 'Teacher of Your Choice',
      description:
        'Select a teacher of your choice by looking at their academic profiles.',
    },
    {
      image: <FreeTrialClasses />,
      heading: '2-Days Free Trial Class',
      description:
        'Have a free of cost demo class to determine if the tutor fulfils your requirements.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: play,
    arrows: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    useTransform: true,
    useCss: true,
    cssEase: 'ease-in-out',
    centerMode: true,
  };

  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home</title>
        <meta
          name="description"
          content="Hire a tutor/teacher for understanding, learning, and gaining in-depth knowledge about a specific subject."
        />
      </Head>
      <Main
        heading={'Largest Tutoring Network \n' + 'of Pakistan'}
        description={
          'Hire a tutor/teacher for understanding, learning, and gaining in-depth knowledge about a specific subject.'
        }
        lottie={MainLottie}
      />
      <div id={'services'}>
        <Separator underLineText={'Services'} />
      </div>
      <div>
        <Slider {...settings} className={'services'}>
          <Service
            heading={'Online Tutoring'}
            description={
              'Hire a qualified and expert teacher to teach you online in a one-on-one session'
            }
            image={<OnlineTutoringSvg />}
            link={'/onlinetutoring'}
            onclick={() => {
              setPlay(false);
            }}
          />
          <Service
            heading={'Home Tutoring'}
            description={
              'Hire a teacher with the right skills and expertise to teach you at your home'
            }
            image={<HomeTutoringSvg />}
            link={'/hometutoring'}
            onclick={() => {
              setPlay(false);
            }}
          />
          <Service
            heading={'Writing Service'}
            description={
              'Hire a professional writer to efficiently work on your assignments on any niche'
            }
            image={<WritingServiceSvg />}
            link={'/assignments'}
            onclick={() => {
              setPlay(false);
            }}
          />
        </Slider>
      </div>
      <Separator text={'How it'} underLineText={'works'} />
      <HowItWorks data={howItWorksData} />
      <Separator text={'Advantages'} /> <Advantages data={advantagesData} />
      <SeparatorBox text={'Reviews'}>
        <Reviews data={props.reviews} />
      </SeparatorBox>
    </>
  );
}

export async function getStaticProps() {
  const reviews = [];
  await fetchReviews(reviews);
  return {
    props: { reviews },
    revalidate: 21600,
  };
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
