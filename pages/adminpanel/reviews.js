import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewReview from '../../components/NewReview/NewReview';
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
  where,
  limit,
  startAfter,
} from 'firebase/firestore/lite';

export default function Reviews(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && router.push('/adminpanel');
    });
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      let reviewsData = [];
      let lastVisibleData;
      try {
        setIsEnd(false);
        const q = query(
          collection(db, 'reviews'),
          where('isApproved', '==', true),
          orderBy('timestamp', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          reviewsData.push({
            ...doc.data(),
            id: doc.id,
            timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
          });
        });
        lastVisibleData = querySnapshot.docs[querySnapshot.docs.length - 1];
      } catch (error) {
        console.log(error.code, error.message);
      }
      reviewsData.length === 0 && setIsEnd(true);
      setReviews(reviewsData);
      setLoading(false);
      setLastVisible(lastVisibleData);
    };
    fetchData();
  }, [update]);

  const fetchMoreData = async () => {
    let reviewsData = [];
    try {
      const q = query(
        collection(db, 'reviews'),
        where('isApproved', '==', true),
        orderBy('timestamp', 'desc'),
        startAfter(lastVisible),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        reviewsData.push({
          ...doc.data(),
          id: doc.id,
          timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
        });
      });
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.log(error.code, error.message);
    }
    reviewsData.length === 0 && setIsEnd(true);
    setReviews([...reviews, ...reviewsData]);
  };

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
        {/* <>
          <NewReview />
          <AdminReviews reviews={props.reviews} />
        </> */}

        <NewReview update={update} setUpdate={setUpdate} />
        <div className="adminSection">
          <h1 className="adminHeading">All Reviews</h1>
          {reviews.length > 0 ? (
            <div id="scrollableDiv" className="adminList">
              <InfiniteScroll
                dataLength={reviews.length}
                next={fetchMoreData}
                hasMore={!isEnd}
                loader={
                  <div className="loader mid">
                    <div />
                  </div>
                }
                scrollableTarget="scrollableDiv"
                style={{
                  backgroundColor: 'transparent',
                  padding: '0.5rem 1rem',
                }}
                endMessage={
                  <p
                    style={{
                      textAlign: 'center',
                      color: '#dcdcdc',
                      fontWeight: 500,
                    }}
                  >
                    <p>End of Results</p>
                  </p>
                }
              >
                {reviews?.map((review) => (
                  <AdminReview
                    key={review.id}
                    review={review}
                    update={update}
                    setUpdate={setUpdate}
                  />
                ))}
              </InfiniteScroll>
            </div>
          ) : loading ? (
            <p className="loader mid">
              <div />
            </p>
          ) : (
            <p className="noRecords">No Reviews Yet</p>
          )}
        </div>
      </>
    )
  );
}

// export async function getServerSideProps() {
//   let reviews = [];
//   try {
//     const q = query(
//       collection(db, 'reviews'),
//       where('isApproved', '==', true),
//       orderBy('timestamp', 'desc')
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       reviews.push({
//         ...doc.data(),
//         id: doc.id,
//         timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
//       });
//     });
//   } catch (error) {
//     console.log(error.code, error.message);
//   }
//   return {
//     props: { reviews },
//   };
// }

Reviews.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
