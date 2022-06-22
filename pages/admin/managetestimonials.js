import Head from 'next/Head';
import NewTestimonial from '../../components/NewTestimonial/NewTestimonial';
import AdminTestimonials from '../../components/Testimonials/AdminTestimonials';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function ManageTestimonials(props) {
  return (
    <>
      <Head>
        <title>Manage Testimonials - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin Manage Testimonials page"
        />
      </Head>
      <NewTestimonial />
      <AdminTestimonials testimonials={props.testimonials} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      testimonials: [
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description: 'Very good.',
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description: 'Very good.',
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description: 'Very good.',
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description: 'Very good.',
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description: 'Very good.',
        },
      ],
    },
  };
}

ManageTestimonials.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
