import Head from 'next/Head';
import NewReview from '../../components/NewReview/NewReview';
import AdminReviews from '../../components/Reviews/AdminReviews';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function ManageReviews(props) {
  return (
    <>
      <Head>
        <title>Manage Reviews - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin Manage Reviews page"
        />
      </Head>
      <NewReview />
      <AdminReviews reviews={props.reviews} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      reviews: [
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

ManageReviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
