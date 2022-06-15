// beacontutorspk.com

import Head from 'next/Head';
import React from 'react';
import LinkButton from '../components/Buttons/LinkButton';
import MainLottie from '../assets/lotties/main-page.json';
import Main from '../components/Main/Main';
import Separator from '../components/Separator/Separator';
import Service from '../components/Service/Service';
import { ReactComponent as HomeTutoring } from '../assets/Services/home-tutoring.svg';
import { ReactComponent as OnlineTutoring } from '../assets/Services/online-tutoring.svg';
import { ReactComponent as WritingService } from '../assets/Services/writing-service.svg';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Layout from '../components/Layouts/Layout';

export default function Home() {
  const homeTutoringSvg = <HomeTutoring />;
  const onlineTutoringSvg = <OnlineTutoring />;
  const writingServiceSvg = <WritingService />;

  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Main
        heading={'Largest Tutoring Network \n' + 'of Pakistan'}
        description={
          'Hire a tutor/teacher for understanding, learning, and gaining in-depth knowledge about a specific subject.'
        }
        lottie={MainLottie}
      />
      <Separator text={'Services'} />
      <div className={'overflow'}>
        <div className={'row'}>
          <Service
            heading={'Online Tutoring'}
            description={
              'Hire a qualified and expert teacher to teach you online in a one-on-one session'
            }
            image={onlineTutoringSvg}
            link={'./online-tutoring'}
          />
          <Service
            heading={'Home Tutoring'}
            description={
              'Hire a teacher with the right skills and expertise to teach you at your home'
            }
            image={homeTutoringSvg}
            link={'./home-tutoring'}
          />
          <Service
            heading={'Writing Service'}
            description={
              'Hire a professional writer to efficiently work on your assignments on any niche'
            }
            image={writingServiceSvg}
            link={'./writing-service'}
          />
        </div>
      </div>

      <Separator text={'How it works'} />
      <Separator text={'Advantages'} />
      <Separator text={'Testimonials'} />

      <LinkButton
        primary={true}
        link={'/online-tutoring'}
        text={'Online tutoring'}
      />
      <LinkButton
        primary={true}
        link={'/home-tutoring'}
        text={'Home Tutoring'}
      />
      <LinkButton
        primary={true}
        link={'/writing-service'}
        text={'Writing Service'}
      />
      <LinkButton
        primary={true}
        link={'/become-a-tutor'}
        text={'Become A Tutor'}
      />
      <HowItWorks />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

