import React from 'react';
import Lottie from "lottie-react";
import styles from './Main.module.css'

export default function Main(props) {

    const headingClass = props.limitWidth? `${styles.heading} ${styles.alternateH}`:styles.heading;
    const descriptionClass = props.limitWidth? `${styles.description} ${styles.alternateD}`:styles.description;

    return (
        <div className={styles.main} >
            <div className={styles.text} >
                <h1 className={headingClass} >
                    {props.heading}
                </h1>
                <p className={descriptionClass} >
                    {props.description}
                </p>
            </div>
            <Lottie className={styles.lottie} animationData={props.lottie} loop={true} autoplay={true} />
        </div>
    );
}

