import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import NewAnnouncement from '../../components/NewAnnouncement/NewAnnouncement';
import AdminAnnouncements from '../../components/Announcements/AdminAnnouncements';
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

export default function ManageAnnouncements(props) {
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
          <title>Manage Announcements - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Meta description for the Admin Manage Announcements page"
          />
        </Head>
        <>
          <NewAnnouncement />
          <AdminAnnouncements announcements={props.announcements} />
        </>
      </>
    )
  );
}

export async function getServerSideProps() {
  let announcements = [];
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
  try {
    const q = query(collection(db, 'announcements'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      announcements.push({
        ...doc.data(),
        id: doc.id,
        timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
      });
    });
  } catch (error) {
    console.log(error.code, error.message);
  }
  console.log(announcements);
  return {
    props: { announcements },
  };
}

ManageAnnouncements.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
