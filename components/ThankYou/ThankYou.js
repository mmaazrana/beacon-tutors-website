import React from 'react';
import styles from './ThankYou.module.css'
import Lottie from "lottie-react";
import ThankYouLottie from '../../assets/lotties/thank-you.json'
import FadeAnimationsStyles from "../../styles/Animations/FadeAnimations.module.css";
import PopupAnimations from "../../styles/Animations/ScaleFadeDelayedAnimations.module.css";
import {CSSTransition} from "react-transition-group";
import {useRouter} from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import {PhoneCall} from 'lucide-react'
export default function ThankYou(props) {
    const router = useRouter();

    const MobileView = dynamic(() =>
        import('react-device-detect').then((module) => module.MobileView)
    );
    const WhatsappSvg = dynamic(() =>
        import('../../assets/whatsapp.svg').then((module) => module.ReactComponent)
    );
    return (
        <CSSTransition
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {500}
            unmountOnExit
            classNames = {FadeAnimationsStyles}>
        <div className = {styles.wrapper}>
            <Lottie className = {styles.lottie} loop= {0}  animationData = {ThankYouLottie}
                    autoplay = {true} initialSegment={[0,120]}/>
            <CSSTransition
                key = {router.pathname}
                in = {true}
                appear = {true}
                timeout = {750}
                classNames = {PopupAnimations}>
                <div className = {styles.contact}>
            <MobileView className = {styles.contact}>
                <Link href = {'/https://wa.me/923148142090'}><a className={styles.primaryButton} ><WhatsappSvg/>Contact Us</a></Link>
                <Link href = {'tel:923148142090'}><a className={styles.secondaryButton} ><PhoneCall/></a></Link>
                </MobileView>
                </div>
            </CSSTransition>

        </div>


    </CSSTransition>
);
}

