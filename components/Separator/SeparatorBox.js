import React from 'react';
import styles from './SeparatorBox.module.css';

export default function SeparatorBox(props) {
  return (
    <>
      <div className={styles.separator}>
        <div className={`${styles.line} ${styles.left}`} />
        <div className={`${styles.roundProfile} ${styles.leftRound}`} />
        <h1 className={styles.text}>{props.text}</h1>
        <div className={`${styles.roundProfile} ${styles.rightRound}`} />
        <div className={`${styles.line} ${styles.right}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.overlay} />
        {props.children}
      </div>
    </>
  );
}