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
      <Announcements data={props.data} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: [
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-Days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-Days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-Days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-Days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-Days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
      ],
    },
  };
}

ManageAnnouncements.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

