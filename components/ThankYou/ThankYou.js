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
    const WebView = dynamic(() =>
        import('react-device-detect').then((module) => module.BrowserView)
    );
    const WhatsappSvg = dynamic(() =>
        import('../../assets/whatsapp.svg').then((module) => module.ReactComponent)
    );
    return (
        <CSSTransition
            mountOnEnter
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {1000}
            unmountOnExit
            classNames = {FadeAnimationsStyles}>
        <div className = {styles.wrapper}>
            <div className = {styles.lottieWrapper} >
                <Lottie className = {styles.lottie} loop= {0}  animationData = {ThankYouLottie}
                        autoplay = {true} initialSegment={[0,120]}/>
                <p><MobileView> Thankyou for submitting your inquiry. It is requested to click on the button below to talk with one of our agent.</MobileView>
                    <WebView> Thankyou for submitting your inquiry. One of our agent will get back to you very soon.</WebView> </p>
            </div>
            <CSSTransition
                mountOnEnter
                key = {router.pathname}
                in = {true}
                appear = {true}
                timeout = {1250}
                classNames = {PopupAnimations}>
                <div className = {styles.contact}>
            <MobileView className = {styles.contact}>
                <Link  target= {'_blank'}  href = {'https://wa.me/923136612514?text=I+want+to+talk+with+an+agent.+Is+there+anyone+available+to+chat%3F'}><a className={styles.primaryButton} ><WhatsappSvg/>Talk with Us</a></Link>
                <Link target= {'_blank'} href = {'tel:+923136612514'}><a className={styles.secondaryButton} ><PhoneCall/></a></Link>
                </MobileView>
                </div>
            </CSSTransition>

        </div>


    </CSSTransition>
);
}

