import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminNav from '../Nav/AdminNav';
import Tabs from '../Tabs/Tabs';
import dynamic from 'next/dynamic';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { pathname } = useRouter();
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
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      <AdminNav user={user} />
      {!(pathname === '/admin/signin') && user && <Tabs />}
      <main>{children}</main>
    </>
  );
}
