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
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
        },
      ],
    },
  };
}

ManageReviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
