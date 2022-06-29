import React from 'react';
import Link from "next/link";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import styles from './Button.module.css'
import animationStyles from '../../styles/Animations/FadeAnimations.module.css'
import {useRouter} from "next/router";

export default function LinkButton(props) {
    const router = useRouter();

    const buttonClass = props.primary ? styles.primary : props.nav ? `${styles.primary} ${styles.nav}` : styles.secondary
    return (
        <SwitchTransition mode='out-in'>
        <CSSTransition
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {500}
            unmountOnExit
            classNames = {animationStyles}>
            {state => (
                <div
                    className = {`${buttonClass} ${props.className}`}>
                    <Link href = {props.link}><a  >{props.text}</a></Link>
                </div>

            )}
        </CSSTransition>
        </SwitchTransition>

    );
}