import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LinkButton from '../Buttons/LinkButton';
import styles from './Nav.module.css';
import { ReactComponent as Logo } from '../../assets/beacon-tutors.svg';
import toast from 'react-hot-toast';
import { auth } from '../../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export default function AdminNav() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user_) => {
    user_ & setUser(user_);
  });

  const signoutHandler = async (e) => {
    try {
      await toast.promise(
        signOut(auth).then(() => {
          router.push('/admin/signin');
        }),
        {
          loading: 'Signing out...',
          success: 'Signed out successfully',
          error: 'Error signing out',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  return (
    <>
      <div
        className={`${styles.nav} ${styles.adminNav} ${
          user ? styles.spaceBetween : styles.center
        }`}
      >
        <div className={styles.logo}>
          <Logo height="25px" width="200px" />
          <Link href="/">Logo</Link>
        </div>
        {user && (
          <div onClick={signoutHandler}>
            <LinkButton nav={true} link="" text="Sign Out" />
          </div>
        )}
      </div>
    </>
  );
}
