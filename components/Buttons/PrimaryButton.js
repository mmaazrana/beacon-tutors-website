import React from 'react';
import styles from './Button.module.css'
export default function PrimaryButton(props) {
    return (
        <>
            <button className={`${styles.primary} ${styles.nav}`} onClick={props.onClick} >{props.text}</button>
        </>
    );
}

