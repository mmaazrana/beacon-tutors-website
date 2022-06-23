import Head from 'next/Head';
import Inquiry from '../../components/Inquiry/Inquiry';
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
            <Inquiry key={index} inquiry={inquiry} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      inquiries: [
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
        {
          title: 'Inquiry',
        },
      ],
    },
  };
}

ViewInquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
