import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import AdminReview from '../../components/Review/AdminReview';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function ApproveReviews(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user_) => {
    user_ && setUser(user_);
  });

  useEffect(() => {
    !user && router.push('/admin/signin');
  }, [user]);
  return (
    <>
      <Head>
        <title>Approve Reviews - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin Approve Reviews page"
        />
      </Head>
      {user && (
        <div className="adminSection">
          <div className="adminList adminListBig">
            {props.reviews?.map((review, index) => (
              <AdminReview key={index} review={review} />
            ))}
          </div>
        </div>
      )}
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
          isApproved: false,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: false,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: false,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: 4,
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: false,
        },
        {
          image: 'f1',
          username: 'Fatima Mujahid',
          rating: '4',
          description:
            "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and managte.",
          isApproved: false,
        },
      ],
    },
  };
}

ApproveReviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
