import Head from 'next/Head';
import NewAnnouncement from '../../components/NewAnnouncement/NewAnnouncement';
import AdminAnnouncements from '../../components/Announcements/AdminAnnouncements';
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
      <AdminAnnouncements announcements={props.announcements} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      announcements: [
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: 5,
          budget: 20000,
          time: 1,
          page: 'Online',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: 5,
          budget: 20000,
          time: 1,
          page: 'Home',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: 5,
          budget: 20000,
          time: 1,
          page: 'Home',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: 5,
          budget: 20000,
          time: 1,
          page: 'Online',
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          days: 5,
          budget: 20000,
          time: 1,
          page: 'Online',
        },
      ],
    },
  };
}

ManageAnnouncements.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
