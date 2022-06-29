import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import AdminInquiry from '../../components/Inquiry/AdminInquiry';
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

export default function ViewInquiries(props) {
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
          <title>View Inquiries - Beacon Tutors Pakistan</title>
          <meta
            name="description"
            content="Meta description for the Admin View Inquiries page"
          />
        </Head>

        <div className="adminSection">
          {props.inquiries.length > 0 ? (
            <div className="adminList adminListBig">
              {props.inquiries?.map((inquiry) => (
                <AdminInquiry key={inquiry.id} inquiry={inquiry} />
              ))}
            </div>
          ) : (
            <p className="noRecords">No Inquiries Yet</p>
          )}
        </div>
      </>
    )
  );
}

export async function getServerSideProps() {
  let inquiries = [];
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
  const querySnapshot = await getDocs(collection(db, 'inquiries'));
  querySnapshot.forEach((doc) => {
    inquiries.push({
      ...doc.data(),
      id: doc.id,
      timestamp: JSON.parse(JSON.stringify(doc.data().timestamp.toDate())),
    });
  });
  console.log(inquiries);
  return {
    props: { inquiries },
  };
}

ViewInquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
