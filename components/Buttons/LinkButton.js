import React from 'react';
import Link from "next/link";
import styles from './Button.module.css'
export default function LinkButton(props) {
    return (
        <>
            <div className={styles.primary}  >
                <Link href={props.link} >{props.text}</Link>
            </div>
        </>
    );
}