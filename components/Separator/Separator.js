import React from 'react';
import styles from './Separator.module.css';
import fadeDelayAnimationStyles from "../../styles/Animations/FadeDelayAnimations.module.css";
import scaleLeftAnimationStyles from "../../styles/Animations/ScaleXLeftAnimations.module.css";
import scaleRightAnimationStyles from "../../styles/Animations/ScaleXRightAnimations.module.css";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {useRouter} from "next/router";
import {Waypoint} from "react-waypoint";
import {useState} from "react";

export default function Separator(props) {
    const router = useRouter();
    const [scrollIn, setScrollIn] = useState(false);

    return (<>
        <Waypoint
            scrollableAncestor={"window"}
            onEnter = {() => {
                setScrollIn(true)
            }}
        >

        <div className = {styles.separator}>


                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {250}
                    classNames = {scaleLeftAnimationStyles}>
            <div

                className = {`${styles.line} ${styles.left}`}/>
                </CSSTransition>
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {500+250}
                    classNames = {fadeDelayAnimationStyles}>
                <div className={styles.fancyText}>

                    <h1 className = {styles.text}>
                {props.text}
                </h1>
                    &nbsp;
                    <h1 className = {styles.text}>
                        {props.underLineText}
                    </h1>
                </div>

                </CSSTransition>
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {250}
                    classNames = {scaleRightAnimationStyles}>
            <div
                className = {`${styles.line} ${styles.right}`}/>
                </CSSTransition>
        </div>
        </Waypoint>

    </>);
}
