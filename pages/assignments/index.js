import React from 'react';
import Head from 'next/Head';
import Main from '../../components/Main/Main';
import WritingLottie from '../../assets/lotties/writing-service.json';
import Separator from '../../components/Separator/Separator';
import { ReactComponent as AssignmentWriting } from '../../assets/Services/WritingService/AssignmentWriting.svg';
import { ReactComponent as ResearchPaperWriting } from '../../assets/Services/WritingService/ResearchPaperWriting.svg';
import { ReactComponent as ThesisAndDissertationWriting } from '../../assets/Services/WritingService/ThesisAndDissertationWriting.svg';
import { ReactComponent as EssayWriting } from '../../assets/Services/WritingService/EssayWriting.svg';
import { ReactComponent as ReportWriting } from '../../assets/Services/WritingService/ReportWriting.svg';
import { ReactComponent as ProposalWriting } from '../../assets/Services/WritingService/ProposalWriting.svg';
import { ReactComponent as ProofReading } from '../../assets/Services/WritingService/ProofReading.svg';
import { ReactComponent as PlagiarismRemoving } from '../../assets/Services/WritingService/PlagiarismRemoving.svg';
import { ReactComponent as DocumentFormatting } from '../../assets/Services/WritingService/DocumentFormatting.svg';
import { ReactComponent as SubmitYourInquiry } from '../../assets/HowItWorks/Home/SubmitYourInquiry.svg';
import { ReactComponent as FinalizeYourRates } from '../../assets/HowItWorks/WritingService/FinalizeYourRates.svg';
import { ReactComponent as MakeThePayment } from '../../assets/HowItWorks/WritingService/MakeThePayment.svg';
import { ReactComponent as ReceiveYourWork } from '../../assets/HowItWorks/WritingService/ReceiveYourWork.svg';
import { ReactComponent as Subjects1000 } from '../../assets/Advantages/WritingService/Subjects1000.svg';
import { ReactComponent as WritingExperts5000 } from '../../assets/Advantages/WritingService/WritingExperts5000.svg';
import { ReactComponent as AffordableCharges } from '../../assets/Advantages/WritingService/AffordableCharges.svg';
import { ReactComponent as Timeliness } from '../../assets/Advantages/WritingService/Timeliness.svg';
import { ReactComponent as SafeAndSecure } from '../../assets/Advantages/WritingService/SafeAndSecure.svg';
import { ReactComponent as CustomerSupport } from '../../assets/Advantages/WritingService/CustomerSupport.svg';
import { ReactComponent as ConfidentialityPolicy } from '../../assets/Advantages/WritingService/ConfidentialityPolicy.svg';
import { ReactComponent as PlagiarismFree } from '../../assets/Advantages/WritingService/PlagiarismFree.svg';
import { ReactComponent as FreeRevisions } from '../../assets/Advantages/WritingService/FreeRevisions.svg';
import { ReactComponent as RefundPolicy } from '../../assets/Advantages/WritingService/RefundPolicy.svg';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Advantages from '../../components/Advantages/Advantages';
import WritingAnnouncements from '../../components/Announcements/WritingAnnouncements';
import Layout from '../../components/Layouts/Layout';

export default function Assignments(props) {
  const howItWorksData = [
    {
      image: <SubmitYourInquiry />,
      heading: 'Submit Your Inquiry',
      description:
        'Send us your detailed requirements by contacting on our official WhatsApp Account.',
    },
    {
      image: <FinalizeYourRates />,
      heading: 'Finalize Rate & Deadline',
      description:
        "We'll negotiate with the writers on the price that fits your budget.",
    },
    {
      image: <MakeThePayment />,
      heading: 'Make Your Payment',
      description:
        'You need to make the payment of the work upfront in-order to get the work started',
    },
    {
      image: <ReceiveYourWork />,
      heading: 'Receive Your Work',
      description: 'Receive your desired work as per your defined deadline',
    },
  ];

  const advantagesData = [
    //   Services
    {
      image: <AssignmentWriting />,
      heading: 'Assignments Writing',
      description:
        'Our Assignment Writing Service will create a 100% custom written assignment that will help you to be the best. Our writers will follow your requirements and instructions, will develop a model answer which is flawlessly structured, well-sourced and written in perfect English.',
    },
    {
      image: <ResearchPaperWriting />,
      heading: 'Research Paper Writing',
      description:
        'Our highly qualified Research Paper writers will help you in creating a piece of academic writing that provides analysis, interpretation and argument based on in-depth independent research. ',
    },
    {
      image: <ThesisAndDissertationWriting />,
      heading: 'Thesis & Dissertation Writing',
      description:
        'Our thesis and dissertations writers will help you in creating a document in support of candidature for an academic degree or professional qualification presenting proper research and findings.',
    },
    {
      image: <EssayWriting />,
      heading: 'Essay Writing',
      description:
        'Our skilled essay writers will help you in creating a piece of writing that gives the author’s own argument. Our writers caters to both formal and informal essay writings on any niche.',
    },
    {
      image: <ReportWriting />,
      heading: 'Report Writing',
      description:
        'Our professional report writers will create a document of a formal writing elaborately on any topic. This service caters to reports regarding multiple niches like school event, business case etc.',
    },
    {
      image: <ProposalWriting />,
      heading: 'Proposal Writing',
      description:
        'Our qualified proposal writers will help you create a persuasive writing document that will help in attempt to convince the recipient to act in accordance with your intent.',
    },
    {
      image: <ProofReading />,
      heading: 'Proofreading',
      description:
        'Our team of skilled proofreaders will help you in reading and reviewing documents so as to eliminate technical errors in spelling, capitalization, punctuations etc.',
    },
    {
      image: <PlagiarismRemoving />,
      heading: 'Plagiarism Removing',
      description:
        'Our group of specialists perform copyright infringement recognition utilizing dependable apparatuses and afterwards expel it physically from your exploration work.',
    },
    {
      image: <DocumentFormatting />,
      heading: 'Document Formatting',
      description:
        'Our expert formatting team will format your document according to your exact specifications in such a way that It is comprehensive and fully customizable',
    },
    // Advantages
    {
      image: <Subjects1000 />,
      heading: '1000+ Subjects',
      description: 'Thousands of Experts For Thousands of subjects.',
    },
    {
      image: <WritingExperts5000 />,
      heading: '5000+ Writing Experts',
      description: 'Thousands of highly professional and qualified writers.',
    },
    {
      image: <AffordableCharges />,
      heading: 'Affordable Charges',
      description: 'Pay less than the market and get more quality in-return.',
    },
    {
      image: <Timeliness />,
      heading: 'Timeliness',
      description: 'Receive your work in your desired deadline.',
    },
    {
      image: <SafeAndSecure />,
      heading: 'Safe & Secure',
      description: '100% encrypted, safe and easy-to-go service',
    },
    {
      image: <CustomerSupport />,
      heading: 'Customer Support',
      description: 'Our customer support is available to assist you 6-Day/Week',
    },
    {
      image: <ConfidentialityPolicy />,
      heading: 'Confidentiality Policy',
      description: 'No disclosure of any information with 100% encryption',
    },
    {
      image: <PlagiarismFree />,
      heading: 'Plagiarism Free',
      description: 'Document with as less plagiarism as possible',
    },
    {
      image: <FreeRevisions />,
      heading: 'Free Revisions',
      description: 'Never pay for small changes in your work',
    },
    {
      image: <RefundPolicy />,
      heading: 'Refund Policy',
      description: 'Claim your refund in your E-Wallet',
    },
  ];

  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Writing Service</title>
        <meta
          name="description"
          content="Meta description for the Writing Service page"
        />
      </Head>
      <Main
        heading={'Assignments & Content Writing Services'}
        description={
          'Hire professional writer for any niche to work efficiently on your writing work of multiple types like Assignments, Research Paper, Thesis & Dissertations, Essays etc.'
        }
        limitWidth={true}
        lottie={WritingLottie}
      />

      <Separator text={'How it works'} />
      <HowItWorks data={howItWorksData} />

      <Separator text={'Advantages'} />
      <Advantages data={advantagesData} />

      <Separator text={'Testimonials'} />

      <Separator text={'Announcements'} />
      <WritingAnnouncements />
    </>
  );
}

Assignments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
