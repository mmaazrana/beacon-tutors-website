import Head from 'next/Head';
import AdminInquiry from '../../components/Inquiry/AdminInquiry';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function ViewInquiries(props) {
  return (
    <>
      <Head>
        <title>View Inquiries - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin View Inquiries page"
        />
      </Head>
      <div className="adminSection">
        <div className="adminList adminListBig">
          {props.inquiries?.map((inquiry, index) => (
            <AdminInquiry key={index} inquiry={inquiry} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    // Sort by date when fetching data
    props: {
      inquiries: [
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: false,
          date: JSON.parse(JSON.stringify(new Date())),
        },
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: false,
          date: JSON.parse(JSON.stringify(new Date())),
        },
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: false,
          date: JSON.parse(JSON.stringify(new Date())),
        },
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: true,
          date: JSON.parse(JSON.stringify(new Date())),
        },
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: true,
          date: JSON.parse(JSON.stringify(new Date())),
        },
        {
          name: 'Jessica Williams',
          city: 'Lahore',
          email: 'jessica.willaims@gmail.com',
          contact: '+92 314 814 2090',
          whatsappNumber: '+92 314 814 2090',
          whoAreYou: 'Student/Parent',
          youWantToHire: ['Online Tutor', 'Home Tutor', 'Content Writer'],
          comments:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
          isViewed: true,
          date: JSON.parse(JSON.stringify(new Date())),
        },
      ],
    },
  };
}

ViewInquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
