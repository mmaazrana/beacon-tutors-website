import React from 'react';
import styles from './SeparatorBox.module.css';
import scaleAnimationStyles from "../../styles/Animations/ScaleFadeAnimations.module.css";
import {Waypoint} from 'react-waypoint';
import {CSSTransition} from 'react-transition-group';
import {useState} from "react";

export default function SeparatorBox(props) {

    const [scrollIn, setScrollIn] = useState(false);

    return (
        <Waypoint
            scrollableAncestor = {"window"}
            onEnter = {() => {
                setScrollIn(true)
            }}
        >

            <div>
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {250}
                    classNames = {scaleAnimationStyles}>
                    <div>

                    <div className = {styles.separator}>
                        <div className = {`${styles.line} ${styles.left}`}/>
                        <div className = {`${styles.roundProfile} ${styles.leftRound}`}/>
                        <h1 className = {styles.text}>{props.text}</h1>
                        <div className = {`${styles.roundProfile} ${styles.rightRound}`}/>
                        <div className = {`${styles.line} ${styles.right}`}/>
                    </div>
                    <div className = {styles.content}>
                        <div className = {styles.overlay}/>
                        {props.children}
                    </div>
                    </div>

                </CSSTransition>
            </div>
        </Waypoint>
    );
}

