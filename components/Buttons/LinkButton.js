import React from 'react';
import Link from "next/link";
import styles from './Button.module.css'

export default function LinkButton(props) {
    const buttonClass = props.primary ? styles.primary : props.nav ? `${styles.primary} ${styles.nav}` : styles.secondary
    return (<>
        <div  className={`${buttonClass}`}>
            <Link href={props.link}>
                <a>
                    {props.text}
                </a>
            </Link>
        </div>
    </>);
}