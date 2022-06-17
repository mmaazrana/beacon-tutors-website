import React from 'react';
import Head from 'next/Head';
import Main from "../../components/Main/Main";
import WritingLottie from "../../assets/lotties/writing-service.json"
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

export default function WritingService(props) {

    const howItWorksData = [{
        image: <MaleAndFemaleTutors/>,
        heading: "Submit Your Inquiry",
        description: "Send us your detailed requirements by contacting on our official WhatsApp Account.",
    }, {
        image: <Tutors5000/>,
        heading: "Finalize Rate & Deadline",
        description: "We’ll negotiate with the writers on the price that fits your budget.",
    }, {
        image: <OneOnOneTutoring/>,
        heading: "Make Your Payment",
        description: "You need to make the payment of the work upfront in-order to get the work started",
    }, {
        image: <AllGradesAndSubjects/>,
        heading: "Receive Your Work",
        description: "Receive your desired work as per your defined deadline",
    }]

    const advantagesData = [{
        image: <SubmitYourInquiry/>,
        heading: "Assignments Writing",
        description: "Our Assignment Writing Service will create a 100% custom written assignment that will help you to be the best. Our writers will follow your requirements and instructions, will develop a model answer which is flawlessly structured, well-sourced and written in perfect English.",
    }, {
        image: <TeacherLocating/>,
        heading: "Research Paper Writing",
        description: "Our highly qualified Research Paper writers will help you in creating a piece of academic writing that provides analysis, interpretation and argument based on in-depth independent research. ",
    }, {
        image: <ProfileSharing/>,
        heading: "Thesis & Dissertation Writing",
        description: "Our thesis and dissertations writers will help you in creating a document in support of candidature for an academic degree or professional qualification presenting proper research and findings.",
    }, {
        image: <DemoConduction/>,
        heading: "Essay Writing",
        description: "Our skilled essay writers will help you in creating a piece of writing that gives the author’s own argument. Our writers caters to both formal and informal essay writings on any niche.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Report Writing",
        description: "Our professional report writers will create a document of a formal writing elaborately on any topic. This service caters to reports regarding multiple niches like school event, business case etc.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Proposal Writing",
        description: "Our qualified proposal writers will help you create a persuasive writing document that will help in attempt to convince the recipient to act in accordance with your intent.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Proofreading",
        description: "Our team of skilled proofreaders will help you in reading and reviewing documents so as to eliminate technical errors in spelling, capitalization, punctuations etc.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Plagiarism Removing",
        description: "Our group of specialists perform copyright infringement recognition utilizing dependable apparatuses and afterwards expel it physically from your exploration work.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Document Formatting",
        description: "Our expert formatting team will format your document according to your exact specifications in such a way that It is comprehensive and fully customizable",
    }, {
        image: <SuccessfulDeal/>,
        heading: "1000+ Subjects",
        description: "Thousands of Experts For Thousands of subjects.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "5000+ Writing Experts",
        description: "Thousands of highly professional and qualified writers.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Affordable Charges",
        description: "Pay less than the market and get more quality in-return.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Timeliness",
        description: "Receive your work in your desired deadline.",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Safe & Secure",
        description: "100% encrypted, safe and easy-to-go service",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Customer Support",
        description: "Our customer support is available to assist you 6-Day/Week",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Confidentiality Policy",
        description: "No disclosure of any information with 100% encryption",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Plagiarism Free",
        description: "Document with as less plagiarism as possible",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Free Revisions",
        description: "Never pay for small changes in your work",
    }, {
        image: <SuccessfulDeal/>,
        heading: "Refund Policy",
        description: "Claim your refund in your E-Wallet",
    }, ]


    return (<>
        <Head>
            <title>Beacon Tutors Pakistan - Writing Service</title>
            <meta
                name="description"
                content="Meta description for the Writing Service page"
            />
        </Head>
        <Main heading={"Assignments & Content Writing Services"}
              description={"Hire professional writer for any niche to work efficiently on your writing work of multiple types like Assignments, Research Paper, Thesis & Dissertations, Essays etc."}
              limitWidth={true}
              lottie={WritingLottie}/>
        <Separator text={"How it works"} />
        <Separator text={"Advantages"} />
        <Separator text={"Testimonials"} />
        <Separator text={"Announcements"} />
    </>);
}

WritingService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
