import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import AdminInquiry from '../../components/Inquiry/AdminInquiry';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Inquiries(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && router.push('/adminpanel');
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
  try {
    const q = query(collection(db, 'inquiries'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      inquiries.push({
        ...doc.data(),
        id: doc.id,
        timestamp: JSON.parse(JSON.stringify(doc.data().timestamp.toDate())),
      });
    });
  } catch (error) {
    console.log(error.code, error.message);
  }
  console.log(inquiries);
  return {
    props: { inquiries },
  };
}

Inquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
