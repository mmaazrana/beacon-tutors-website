import React from 'react';
import styles from './Separator.module.css';
export default function Separator(props) {
  return (
    <>
      <div className={styles.separator}>
        <div className={`${styles.line} ${styles.left}`} />
        <h1 className={styles.text}>{props.text}</h1>
        <div className={`${styles.line} ${styles.right}`} />
      </div>
    </>
  );
}
