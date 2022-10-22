import React from 'react';
import Lottie from "lottie-react";
import styles from './Main.module.css'
import LinkButton from "../Buttons/LinkButton";
import {useRouter} from "next/router";
import animationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {CSSTransition, SwitchTransition} from "react-transition-group";

export default function Main(props) {

    const router = useRouter();

    const headingClass = props.limitWidth ? `${styles.heading} ${styles.alternateH}` : styles.heading;
    const descriptionClass = props.limitWidth ? `${styles.description} ${styles.alternateD}` : styles.description;
    const textClass = props.limitWidth ? `${styles.text} ${styles.alternateText}` : styles.text;
    const lottieClass = props.limitWidth ? `${styles.lottie} ${styles.alternateLottie}` : styles.lottie;

    return (
        <SwitchTransition mode = 'out-in'>
            <CSSTransition
            mountOnEnter
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {1000}
            unmountOnExit
            classNames = {animationStyles}>
            {state => (
                <div className = {styles.main}>
                    <div
                        className = {textClass}>

                        <h1 className = {headingClass}>
                            {props.heading}
                        </h1>


                        <p className = {descriptionClass}>
                            {props.description}
                        </p>


                        <LinkButton className = {styles.button} text = {"Contact Us"} link = {"/selectcity"}
                                    primary = {true}/>

                    </div>
                    <div>

                        <Lottie className = {lottieClass} animationData = {props.lottie} loop = {true}
                                autoplay = {true}/>
                    </div>
                </div>
            )}
        </CSSTransition>
        </SwitchTransition>
    );
}

