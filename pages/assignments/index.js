import React from 'react';
import Head from 'next/head';
import Main from '../../components/Main/Main';
import WritingLottie from '../../assets/lotties/writing-service.json';
import Separator from '../../components/Separator/Separator';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Advantages from '../../components/Advantages/Advantages';
import Services from '../../components/Services/Services';
import dynamic from 'next/dynamic';
import SeparatorBox from '../../components/Separator/SeparatorBox';
import Reviews from '../../components/Reviews/Reviews';
import {
  fetchAnnouncements,
  fetchReviews,
} from '../../components/Functions/Functions';

const Layout = dynamic(() => import('../../components/Layouts/Layout'));

export default function Assignments(props) {
  const AssignmentWriting = dynamic(() =>
    import('../../assets/Services/WritingService/AssignmentWriting.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ResearchPaperWriting = dynamic(() =>
    import(
      '../../assets/Services/WritingService/ResearchPaperWriting.svg'
    ).then((module) => module.ReactComponent)
  );
  const ThesisAndDissertationWriting = dynamic(() =>
    import(
      '../../assets/Services/WritingService/ThesisAndDissertationWriting.svg'
    ).then((module) => module.ReactComponent)
  );
  const EssayWriting = dynamic(() =>
    import('../../assets/Services/WritingService/EssayWriting.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ReportWriting = dynamic(() =>
    import('../../assets/Services/WritingService/ReportWriting.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ProposalWriting = dynamic(() =>
    import('../../assets/Services/WritingService/ProposalWriting.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ProofReading = dynamic(() =>
    import('../../assets/Services/WritingService/ProofReading.svg').then(
      (module) => module.ReactComponent
    )
  );
  const PlagiarismRemoving = dynamic(() =>
    import('../../assets/Services/WritingService/PlagiarismRemoving.svg').then(
      (module) => module.ReactComponent
    )
  );
  const DocumentFormatting = dynamic(() =>
    import('../../assets/Services/WritingService/DocumentFormatting.svg').then(
      (module) => module.ReactComponent
    )
  );
  const SubmitYourInquiry = dynamic(() =>
    import('../../assets/HowItWorks/Home/SubmitYourInquiry.svg').then(
      (module) => module.ReactComponent
    )
  );
  const FinalizeYourRates = dynamic(() =>
    import('../../assets/HowItWorks/WritingService/FinalizeYourRates.svg').then(
      (module) => module.ReactComponent
    )
  );
  const MakeThePayment = dynamic(() =>
    import('../../assets/HowItWorks/WritingService/MakeThePayment.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ReceiveYourWork = dynamic(() =>
    import('../../assets/HowItWorks/WritingService/ReceiveYourWork.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Subjects1000 = dynamic(() =>
    import('../../assets/Advantages/WritingService/Subjects1000.svg').then(
      (module) => module.ReactComponent
    )
  );
  const WritingExperts5000 = dynamic(() =>
    import(
      '../../assets/Advantages/WritingService/WritingExperts5000.svg'
    ).then((module) => module.ReactComponent)
  );
  const AffordableCharges = dynamic(() =>
    import('../../assets/Advantages/WritingService/AffordableCharges.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Timeliness = dynamic(() =>
    import('../../assets/Advantages/WritingService/Timeliness.svg').then(
      (module) => module.ReactComponent
    )
  );
  const SafeAndSecure = dynamic(() =>
    import('../../assets/Advantages/WritingService/SafeAndSecure.svg').then(
      (module) => module.ReactComponent
    )
  );
  const CustomerSupport = dynamic(() =>
    import('../../assets/Advantages/WritingService/CustomerSupport.svg').then(
      (module) => module.ReactComponent
    )
  );
  const ConfidentialityPolicy = dynamic(() =>
    import(
      '../../assets/Advantages/WritingService/ConfidentialityPolicy.svg'
    ).then((module) => module.ReactComponent)
  );
  const PlagiarismFree = dynamic(() =>
    import('../../assets/Advantages/WritingService/PlagiarismFree.svg').then(
      (module) => module.ReactComponent
    )
  );
  const FreeRevisions = dynamic(() =>
    import('../../assets/Advantages/WritingService/FreeRevisions.svg').then(
      (module) => module.ReactComponent
    )
  );
  const RefundPolicy = dynamic(() =>
    import('../../assets/Advantages/WritingService/RefundPolicy.svg').then(
      (module) => module.ReactComponent
    )
  );

  const Female1 = dynamic(() =>
    import('../../assets/Avatars/Female1.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Female2 = dynamic(() =>
    import('../../assets/Avatars/Female2.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Female3 = dynamic(() =>
    import('../../assets/Avatars/Female3.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Female4 = dynamic(() =>
    import('../../assets/Avatars/Female4.svg').then(
      (module) => module.ReactComponent
    )
  );

  const Male1 = dynamic(() =>
    import('../../assets/Avatars/Male1.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Male2 = dynamic(() =>
    import('../../assets/Avatars/Male2.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Male3 = dynamic(() =>
    import('../../assets/Avatars/Male3.svg').then(
      (module) => module.ReactComponent
    )
  );
  const Male4 = dynamic(() =>
    import('../../assets/Avatars/Male4.svg').then(
      (module) => module.ReactComponent
    )
  );

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

  const ServicesData = [
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
  ];

  const advantagesData = [
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
          content="Hire professional writer for any niche to work efficiently on your writing work of multiple types like Assignments, Research Paper, Thesis &amp; Dissertations, Essays etc."
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

      <Separator underLineText={'Services'} />

      <Services data={ServicesData} />

      <Separator text={'How it'} underLineText={'works'} />

      <HowItWorks data={howItWorksData} />

      <Separator text={'Advantages'} />
      <Advantages data={advantagesData} />

      <SeparatorBox text={'Reviews'}>
        {' '}
        <Reviews data={props.reviews} />{' '}
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

Assignments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
