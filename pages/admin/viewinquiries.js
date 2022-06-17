import Head from 'next/Head';
import styles from '../../styles/ViewInquiries.module.css';
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
      <div className={styles.inquiries}>
        <div className={styles.list}>
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
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
        },
      ],
    },
  };
}

ViewInquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
