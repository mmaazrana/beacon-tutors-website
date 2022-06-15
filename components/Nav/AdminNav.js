import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import LinkButton from '../Buttons/LinkButton';
import { ReactComponent as Logo } from '../../assets/beacon-tutors.svg';

export default function AdminNav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Logo height="25px" width="200px" />
          <Link href="/">Logo</Link>
        </div>
        <div className="row">
          <LinkButton nav={true} link="/admin/signin" text={'Sign Out'} />
        </div>
      </div>
    </>
  );
}
