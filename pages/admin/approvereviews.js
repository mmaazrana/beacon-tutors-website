import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import AdminReview from '../../components/Review/AdminReview';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

export default function ApproveReviews(props) {
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
          <title>Approve Reviews - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Meta description for the Admin Approve Reviews page"
          />
        </Head>
        <div className="adminSection">
          {props.reviews.length > 0 ? (
            <div className="adminList adminListBig">
              {props.reviews?.map((review) => (
                <AdminReview key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <p className="noRecords">No User Reviews Yet</p>
          )}
        </div>
      </>
    )
  );
}

export async function getServerSideProps() {
  let reviews = [];
  // const announcementsRef = collection(db, 'announcements');
  // const q = query(announcementsRef, orderBy('timestamp', 'desc'));
  // console.log(q);
  // onSnapshot(q, (snapshot) => {
  //   snapshot.docs.forEach((doc) => {
  //     console.log(doc);
  //     announcements.push({
  //       ...doc.data(),
  //       id: doc.id,
  //     });
  //   });
  // });
  const querySnapshot = await getDocs(collection(db, 'reviews'));
  querySnapshot.forEach((doc) => {
    reviews.push({
      ...doc.data(),
      id: doc.id,
      timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
    });
  });
  console.log(reviews);
  return {
    props: { reviews },
  };
}

ApproveReviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
