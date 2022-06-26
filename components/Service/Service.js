import React from 'react';
import { useRouter } from 'next/router';
import LinkButton from '../Buttons/LinkButton';
import styles from './Service.module.css';
export default function Service(props) {
  const { pathname } = useRouter();
  return (
    <>
      <div className={`${styles.main} ${pathname === '/assignments' && styles.secondary} `}>
        <div className={styles.image}>{props.image}</div>
        <div className={styles.text}>
          <h4 className={styles.heading}>{props.heading}</h4>
          <p className={styles.description}>{props.description}</p>
          {pathname === '/' && (
            <LinkButton primary={true} text={'Learn More'} link={props.link} />
          )}
        </div>
      </div>
    </>
  );
}
