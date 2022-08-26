import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminNav from '../Nav/AdminNav';
import Tabs from '../Tabs/Tabs';
import dynamic from 'next/dynamic';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
    });
  }, [user]);

  const Pattern = dynamic(() =>
    import('../../assets/background pattern.svg').then(
      (module) => module.ReactComponent
    )
  );

  return (
    <>
        <div className = {'background'}>
            <Pattern width="100%" height="100%" />
        </div>
      <AdminNav user={user} />
      {!(router.pathname === '/adminpanel') && user && <Tabs />}
      <main>{children}</main>
    </>
  );
}
