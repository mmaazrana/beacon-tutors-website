import React, {useState} from 'react';
import styles from "./Advantage.module.css"
import {CSSTransition} from 'react-transition-group';
import {Waypoint} from "react-waypoint";
import scaleAnimationStyles from "../../styles/Animations/ScaleFadeAnimations.module.css";

export default function Advantage(props) {

    const [scrollIn, setScrollIn] = useState(false);

    return (
        <>
            <Waypoint
                topOffset = {"55px"}
                scrollableAncestor = {"window"}
                debug = {true}
                onEnter = {() => {
                    setScrollIn(true)
                    console.log("entered")
                }}
                onLeave = {() => {
                    setScrollIn(false)
                }}
            >
                <div>

                    <CSSTransition
                        in = {scrollIn}
                        appear = {scrollIn}
                        timeout = {250}
                        classNames = {scaleAnimationStyles}>
                        <div className = {styles.main}>
                            <div className = {styles.image}>
                                {props.image}
                            </div>
                            <div className = {styles.text}>
                                <h4 className = {styles.heading}>
                                    {props.heading}
                                </h4>
                                <p className = {styles.description}>
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </Waypoint>

        </>
    );
}

