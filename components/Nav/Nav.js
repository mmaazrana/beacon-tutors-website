import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import styles from './Nav.module.css';
import SecondaryButton from '../Buttons/SecondaryButton';
import PrimaryButton from '../Buttons/PrimaryButton';
export default function Nav(props) {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Logo />
          <Link href={'./'}>Logo</Link>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonsSecondary}>
            :
            <SecondaryButton text={'Home'} />
            <SecondaryButton text={'Our Services'} />
            <SecondaryButton text={'Work as Tutor'} />
            <SecondaryButton text={'Terms & Conditions'} />
          </div>
          <PrimaryButton text={'Submit Inquiry'} />
        </div>
      </div>
    </>
  );
}

