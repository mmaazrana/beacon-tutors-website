import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import NewReview from '../../components/NewReview/NewReview';
import AdminReviews from '../../components/Reviews/AdminReviews';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function ManageReviews(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && router.push('/admin/signin');
    });
  }, [user]);

  return (
    user && (
      <>
        <Head>
          <title>Manage Reviews - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Meta description for the Admin Manage Reviews page"
          />
        </Head>
        <>
          <NewReview />
          <AdminReviews reviews={props.reviews} />
        </>
      </>
    )
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
          isApproved: true,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 2.5,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: true,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: true,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: true,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: true,
        },
      ],
    },
  };
}

ManageReviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
