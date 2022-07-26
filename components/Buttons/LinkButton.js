import React from 'react';
import Link from "next/link";
import styles from './Button.module.css'
import {useRouter} from "next/router";

export default function LinkButton(props) {
    const router = useRouter();

    const buttonClass = props.primary ? styles.primary : props.nav ? `${styles.primary} ${styles.nav}` : styles.secondary
    return (
        <div
            className = {`${buttonClass} ${props.className}`}>
            <Link href = {
                {
                    pathname: props.link,
                    hash: props.hash,
                    query: props.data ? props.data : null,
                }
            }><a>{props.text}</a></Link>
        </div>

    );
}