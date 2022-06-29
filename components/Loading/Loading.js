import React from 'react';
import styles from "./Loading.module.css";
import animationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {useRouter} from "next/router";

export default function Loading(props) {

    const router = useRouter();

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
        <div  className = {props.loading ? styles.body_loading : styles.none}>
            <div
                className = {styles.lds_ellipsis}
            >
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
                )}
            </CSSTransition>
        </SwitchTransition>
    );
}

