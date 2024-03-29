import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import AdminInquiry from '../../components/Inquiry/AdminInquiry';
import AdminLayout from '../../components/Layouts/AdminLayout';
import moment from 'moment';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore/lite';
import Loading from "../../components/Loading/Loading";

export default function Inquiries(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
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
      let inquiriesData = [];
      let lastVisibleData;
      // const twoDaysAgo = moment().subtract(2, 'days').toDate();
      try {
        setIsEnd(false);
        const q = query(
          collection(db, 'inquiries'),
          where('description', '==', 'student'),
          orderBy('timestamp', 'desc'),
          // where('timestamp', '>', twoDaysAgo),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          inquiriesData.push({
            ...doc.data(),
            id: doc.id,
            timestamp: JSON.parse(
              JSON.stringify(doc.data().timestamp.toDate())
            ),
          });
        });
        lastVisibleData = querySnapshot.docs[querySnapshot.docs.length - 1];
      } catch (error) {
        console.log(error.code, error.message);
      }
      inquiriesData.length === 0 && setIsEnd(true);
      setInquiries(inquiriesData);
      setLoading(false);
      setLastVisible(lastVisibleData);
    };
    fetchData();
  }, [update]);

  const fetchMoreData = async () => {
    let inquiriesData = [];
    try {
      const q = query(
        collection(db, 'inquiries'),
        where('description', '==', 'student'),
        orderBy('timestamp', 'desc'),
        // where('timestamp', '>', twoDaysAgo),
        startAfter(lastVisible),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        inquiriesData.push({
          ...doc.data(),
          id: doc.id,
          timestamp: JSON.parse(JSON.stringify(doc.data().timestamp.toDate())),
        });
      });
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.log(error.code, error.message);
    }
    inquiriesData.length === 0 && setIsEnd(true);
    setInquiries([...inquiries, ...inquiriesData]);
  };

  return (
    user && (
      <>
        <Head>
          <title>View Inquiries - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Admin View Inquiries page to view and mark inquiries"
          />
        </Head>

        <div className="adminSection">
          {inquiries.length > 0 ? (
            <div id="scrollableDiv" className="adminList adminListBig">
              <InfiniteScroll
                dataLength={inquiries.length}
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
                {inquiries?.map((inquiry) => (
                  <AdminInquiry
                    key={inquiry.id}
                    inquiry={inquiry}
                    update={update}
                    setUpdate={setUpdate}
                  />
                ))}
              </InfiniteScroll>
            </div>
          ) : loading ? (
              <Loading loading={true}/>
          ) : (
            <p className="noRecords">No Inquiries Yet</p>
          )}
        </div>
      </>
    )
  );
}

// export async function getServerSideProps() {
//   let inquiries = [];
//   let lastVisible;
//   try {
//     const q = query(
//       collection(db, 'inquiries'),
//       orderBy('timestamp', 'desc'),
//       limit(25)
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       inquiries.push({
//         ...doc.data(),
//         id: doc.id,
//         timestamp: JSON.parse(JSON.stringify(doc.data().timestamp.toDate())),
//       });
//     });
//     console.log('ssr', inquiries.length);
//     lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
//   } catch (error) {
//     console.log(error.code, error.message);
//   }
//   return {
//     props: {
//       inquiries: inquiries,
//       lastVisible: JSON.stringify(lastVisible),
//       isEnd: inquiries.length === 0 ? true : false,
//     },
//   };
// }

Inquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
