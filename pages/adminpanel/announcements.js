import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewAnnouncement from '../../components/NewAnnouncement/NewAnnouncement';
import AdminAnnouncement from '../../components/Announcement/AdminAnnouncement';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore/lite';

export default function Announcements(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
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
      let announcementsData = [];
      let lastVisibleData;
      try {
        setIsEnd(false);
        const q = query(
          collection(db, 'announcements'),
          orderBy('timestamp', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          announcementsData.push({
            ...doc.data(),
            id: doc.id,
            timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
          });
        });
        lastVisibleData = querySnapshot.docs[querySnapshot.docs.length - 1];
      } catch (error) {
        console.log(error.code, error.message);
      }
      announcementsData.length === 0 && setIsEnd(true);
      setAnnouncements(announcementsData);
      setLoading(false);
      setLastVisible(lastVisibleData);
    };
    fetchData();
  }, [update]);

  const fetchMoreData = async () => {
    let announcementsData = [];
    try {
      const q = query(
        collection(db, 'announcements'),
        orderBy('timestamp', 'desc'),
        startAfter(lastVisible),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        announcementsData.push({
          ...doc.data(),
          id: doc.id,
          timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
        });
      });
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.log(error.code, error.message);
    }
    announcementsData.length === 0 && setIsEnd(true);
    setAnnouncements([...announcements, ...announcementsData]);
  };

  return (
    user && (
      <>
        <Head>
          <title>Manage Announcements - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Meta description for the Admin Manage Announcements page"
          />
        </Head>
        {/* <>
          <NewAnnouncement />
          <AdminAnnouncements announcements={props.announcements} />
        </> */}

        <NewAnnouncement update={update} setUpdate={setUpdate} />
        <div className="adminSection">
          <h1 className="adminHeading">All Announcements</h1>
          {announcements.length > 0 ? (
            <div id="scrollableDiv" className="adminList">
              <InfiniteScroll
                dataLength={announcements.length}
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
                {announcements?.map((announcement) => (
                  <AdminAnnouncement
                    key={announcement.id}
                    announcement={announcement}
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
            <p className="noRecords">No Announcements Yet</p>
          )}
        </div>
      </>
    )
  );
}

// export async function getServerSideProps() {
//   let announcements = [];
//   try {
//     const q = query(
//       collection(db, 'announcements'),
//       orderBy('timestamp', 'desc')
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       announcements.push({
//         ...doc.data(),
//         id: doc.id,
//         timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
//       });
//     });
//   } catch (error) {
//     console.log(error.code, error.message);
//   }
//   return {
//     props: { announcements },
//   };
// }

Announcements.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
