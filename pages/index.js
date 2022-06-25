// beacontutorspk.com

import Head from 'next/Head';
import React from 'react';
import LinkButton from '../components/Buttons/LinkButton';
import MainLottie from '../assets/lotties/main-page.json';
import Main from '../components/Main/Main';
import Separator from '../components/Separator/Separator';
import Service from '../components/Service/Service';
import {ReactComponent as HomeTutoring} from '../assets/Services/home-tutoring.svg';
import {ReactComponent as OnlineTutoring} from '../assets/Services/online-tutoring.svg';
import {ReactComponent as WritingService} from '../assets/Services/writing-service.svg';
import {ReactComponent as DemoConduction} from '../assets/HowItWorks/Home/DemoConduction.svg';
import {ReactComponent as ProfileSharing} from '../assets/HowItWorks/Home/ProfileSharing.svg';
import {ReactComponent as SubmitYourInquiry} from '../assets/HowItWorks/Home/SubmitYourInquiry.svg';
import {ReactComponent as SuccessfulDeal} from '../assets/HowItWorks/Home/SuccessfulDeal.svg';
import {ReactComponent as TeacherLocating} from '../assets/HowItWorks/Home/TeacherLocating.svg';
import {ReactComponent as AllGradesAndSubjects} from '../assets/Advantages/Home/AllGradesAndSubjects.svg';
import {ReactComponent as FreeTrialClasses} from '../assets/Advantages/Home/FreeTrialClasses.svg';
import {ReactComponent as MaleAndFemaleTutors} from '../assets/Advantages/Home/MaleAndFemaleTutors.svg';
import {ReactComponent as TeachersOfYourChoice} from '../assets/Advantages/Home/TeachersOfYourChoice.svg';
import {ReactComponent as Tutors5000} from '../assets/Advantages/Home/Tutors5000.svg';
import {ReactComponent as OneOnOneTutoring} from '../assets/Advantages/Home/OneOnOneTutoring.svg';
import {ReactComponent as Female1} from '../assets/Avatars/Female1.svg';
import {ReactComponent as Female2} from '../assets/Avatars/Female2.svg';
import {ReactComponent as Female3} from '../assets/Avatars/Female3.svg';
import {ReactComponent as Female4} from '../assets/Avatars/Female4.svg';
import {ReactComponent as Male1} from '../assets/Avatars/Male1.svg';
import {ReactComponent as Male2} from '../assets/Avatars/Male2.svg';
import {ReactComponent as Male3} from '../assets/Avatars/Male3.svg';
import {ReactComponent as Male4} from '../assets/Avatars/Male4.svg';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Slider from 'react-slick';
import Advantages from '../components/Advantages/Advantages';
import Testimonials from '../components/Testimonials/Testimonials';
import Layout from '../components/Layouts/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SeparatorBox from "../components/Separator/SeparatorBox";
import Announcements from "../components/Announcements/Announcements";

export default function Home() {
    const homeTutoringSvg = <HomeTutoring/>;
    const onlineTutoringSvg = <OnlineTutoring/>;
    const writingServiceSvg = <WritingService/>;
    const howItWorksData = [
        {
            image: <SubmitYourInquiry/>,
            heading: 'Submit Your Inquiry',
            description:
                'Send us a brief description of your requirements by contacting on our official WhatsApp account or by giving us a call.',
        },
        {
            image: <TeacherLocating/>,
            heading: 'Teacher Locating',
            description:
                'Our Teacher Assistance Department will start locating a perfect match that aligns with your requirements.',
        },
        {
            image: <ProfileSharing/>,
            heading: 'Profile Sharing',
            description:
                'The company will compile a list of applications received and forward the most relevant profiles of teachers to be shortlisted for the introductory session.',
        },
        {
            image: <DemoConduction/>,
            heading: 'Demo Conduction',
            description:
                'Have a free of cost 2-days trial class to determine if the tutor fulfils your requirements.',
        },
        {
            image: <SuccessfulDeal/>,
            heading: 'Successful Deal',
            description:
                'Upon satisfactory demo/trial class the student/parent will pay the fee to start the regular classes',
        },
    ];
    const advantagesData = [
        {
            image: <MaleAndFemaleTutors/>,
            heading: 'Male & Female Tutors',
            description:
                'Hire a tutor as per your gender preference for any grade and any subject in your city',
        },
        {
            image: <Tutors5000/>,
            heading: '5000+\n' + 'Teachers',
            description:
                'Thousands of tutors across the globe from all the educational backgrounds',
        },
        {
            image: <OneOnOneTutoring/>,
            heading: 'One-On-One Tutoring',
            description:
                'No more group studies. Study in a one-on-one interactive environment.',
        },
        {
            image: <AllGradesAndSubjects/>,
            heading: 'All Grades & Subjects',
            description:
                'Tutors from diverse educational backgrounds that cater to all grades and subjects.',
        },
        {
            image: <TeachersOfYourChoice/>,
            heading: 'Teacher of Your Choice',
            description:
                'Select a teacher of your choice by looking at their academic profiles.',
        },
        {
            image: <FreeTrialClasses/>,
            heading: '2-Days Free Trial Class',
            description:
                'Have a free of cost demo class to determine if the tutor fulfils your requirements.',
        },
    ];
    let testimonialsData = [
        {
            image: <Female1/>,
            username: "Christine Stewart",
            rating: 4,
            description: "Good experience",
        },
        {
            image: <Female2/>,
            username: "Taylor Swift",
            rating: 5,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
        },
        {
            image: <Female3/>,
            username: "Elizabeth Olsen",
            rating: 3,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
        },
        {
            image: <Female4/>,
            username: "Natasha Romanoff",
            rating: 4,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
        },
        {
            image: <Male1/>,
            username: "Christian Bale",
            rating: 2,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
        },
        {
            image: <Male2/>,
            username: "Jason Statham",
            rating: 4,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you.",
        },
        {
            image: <Male3/>,
            username: "Dwayne Johnson",
            rating: 5,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage, I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
        },
        {
            image: <Male4/>,
            username: "John Wick",
            rating: 3,
            description: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
    };
    return (
        <>
            <Head>
                <title>Beacon Tutors Pakistan - Home</title>
                <meta name="description" content="Meta description for the Home page"/>
            </Head>
            <Main
                heading={'Largest Tutoring Network \n' + 'of Pakistan'}
                description={
                    'Hire a tutor/teacher for understanding, learning, and gaining in-depth knowledge about a specific subject.'
                }
                lottie={MainLottie}
            />
            <Separator text={'Services'}/>
            {/*<ScrollContainer className="scroll-container">*/}

            <Slider {...settings} className={'services'}>
                <Service
                    heading={'Online Tutoring'}
                    description={
                        'Hire a qualified and expert teacher to teach you online in a one-on-one session'
                    }
                    image={onlineTutoringSvg}
                    link={'/onlinetutoring'}
                />
                <Service
                    heading={'Home Tutoring'}
                    description={
                        'Hire a teacher with the right skills and expertise to teach you at your home'
                    }
                    image={homeTutoringSvg}
                    link={'/hometutoring'}
                />
                <Service
                    heading={'Writing Service'}
                    description={
                        'Hire a professional writer to efficiently work on your assignments on any niche'
                    }
                    image={writingServiceSvg}
                    link={'/assignments'}
                />
                {/*</div>*/}
            </Slider>
            {/*</ScrollContainer>*/}
            <Separator text={'How it works'}/>
            <HowItWorks data={howItWorksData}/>

            <Separator text={'Advantages'}/>
            <Advantages data={advantagesData}/>

            <SeparatorBox text={'Reviews'} >
                <Testimonials testimonials={testimonialsData}/>
            </SeparatorBox>

            <SeparatorBox text={'Announcements'} >
                <Testimonials testimonials={testimonialsData}/>
                {/*<Announcements announcements={testimonialsData} />*/}
            </SeparatorBox>


        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
