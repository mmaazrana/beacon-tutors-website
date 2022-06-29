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

    return (
        <SwitchTransition mode = 'out-in'>
            <CSSTransition
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {500}
            unmountOnExit
            classNames = {animationStyles}>
            {state => (
                <div className = {styles.main}>
                    <div
                        className = {styles.text}>

                        <h1 className = {headingClass}>
                            {props.heading}
                        </h1>


                        <p className = {descriptionClass}>
                            {props.description}
                        </p>


                        <LinkButton className = {styles.button} text = {"Submit Inquiry"} link = {"/submitinquiry"}
                                    primary = {true}/>

                    </div>
                    <div>

                        <Lottie className = {styles.lottie} animationData = {props.lottie} loop = {true}
                                autoplay = {true}/>
                    </div>
                </div>
            )}
        </CSSTransition>
        </SwitchTransition>
    );
}

