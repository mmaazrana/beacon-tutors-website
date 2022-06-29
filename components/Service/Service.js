import React, {useState} from 'react';
import {useRouter} from 'next/router';
import LinkButton from '../Buttons/LinkButton';
import styles from './Service.module.css';
import {Waypoint} from 'react-waypoint';
import scaleAnimationStyles from "../../styles/Animations/ScaleFadeAnimations.module.css";
import fadeDelayAnimationStyles from "../../styles/Animations/FadeDelayAnimations.module.css";
import {CSSTransition} from 'react-transition-group';

export default function Service(props) {
    const {pathname} = useRouter();
    const [scrollIn, setScrollIn] = useState(false);

    return (
        <>
            <Waypoint
            scrollableAncestor = {"window"}
            onEnter = {() => {
                setScrollIn(true)
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
            <div
                className = {`${styles.main} ${pathname === '/assignments' && styles.secondary} `}>
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {750}
                    classNames = {fadeDelayAnimationStyles}>
                <div className = {styles.image}>{props.image}</div>
                </CSSTransition>
                <div className = {styles.text}>
                    <h4 className = {styles.heading}>{props.heading}</h4>
                    <p className = {styles.description}>{props.description}</p>{pathname === '/' && (
                    <LinkButton primary = {true} text = {'Learn More'} link = {props.link}/>
                )}
                </div>
            </div>
            </CSSTransition>
            </div>
            </Waypoint>

        </>

    );
}
