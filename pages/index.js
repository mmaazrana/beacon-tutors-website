// beacontutorspk.com

import Head from "next/Head";
import React from "react";
import LinkButton from "../components/Buttons/LinkButton";
import Nav from "../components/Nav/Nav";
import Lottie from "lottie-react";
import MainLottie from "../assets/lotties/main-page.json"
import BecomeLottie from "../assets/lotties/be a tutor final.json"
import HomeLottie from "../assets/lotties/home-tutoring.json"
import OnlineLottie from "../assets/lotties/online tutoring.json"
import WritingLottie from "../assets/lotties/writing-service.json"
import {ReactComponent as Pattern} from "../assets/background pattern.svg";
import Main from "../components/Main/Main";
import HowItWorks from '../components/HowItWorks/HowItWorks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Home</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <h1>Beacon Tutors Official Website</h1>
      <p>Let's do this!</p>
        <Main heading={"Heading"} description={"Description"} lottie={MainLottie} />
      <div className={'row'}>
        <Lottie animationData={MainLottie} loop={true} autoplay={true} />
        <Lottie animationData={BecomeLottie} loop={true} autoplay={true} />
        <Lottie animationData={HomeLottie} loop={true} autoplay={true} />
        <Lottie animationData={OnlineLottie} loop={true} autoplay={true} />
        <Lottie animationData={WritingLottie} loop={true} autoplay={true} />
      </div>

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
      <HowItWorks/>
    </>
  );
}
