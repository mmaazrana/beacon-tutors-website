import Head from 'next/Head';
import Announcements from '../../components/AllAnnouncements/Announcements';

export default function Admin(props) {
  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Admin Panel</title>
        <meta
          name="description"
          content="Meta description for the Admin page"
        />
      </Head>
      <h1>Admin Panel</h1>
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
            { icon: 'Calendar', text: '5-days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
        {
          title: 'Need an experienced female tutor for O-level Biology',
          list: [
            { icon: 'Calendar', text: '5-days / Week' },
            { icon: 'CurrencyNote', text: '20,000 PKR / Month' },
            { icon: 'Clock', text: '1-Hour / Day' },
          ],
        },
      ],
    },
  };
}
