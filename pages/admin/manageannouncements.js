import Head from 'next/Head';
import NewAnnouncement from '../../components/NewAnnouncement/NewAnnouncement';
import Announcements from '../../components/Announcements/Announcements';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function ManageAnnouncements(props) {
  return (
    <>
      <Head>
        <title>Manage Announcements - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin Manage Announcements page"
        />
      </Head>
      <NewAnnouncement />
      <Announcements announcements={props.announcements} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      announcements: [
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: '5-Days / Week',
          budget: '20,000 PKR / Month',
          time: '1-Hour / Day',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: '5-Days / Week',
          budget: '20,000 PKR / Month',
          time: '1-Hour / Day',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: '5-Days / Week',
          budget: '20,000 PKR / Month',
          time: '1-Hour / Day',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: '5-Days / Week',
          budget: '20,000 PKR / Month',
          time: '1-Hour / Day',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: '5-Days / Week',
          budget: '20,000 PKR / Month',
          time: '1-Hour / Day',
        },
      ],
    },
  };
}

ManageAnnouncements.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
