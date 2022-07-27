import React from 'react';
import styles from './ThankYou.module.css'
import FadeAnimationsStyles from "../../styles/Animations/FadeAnimations.module.css";
import {CSSTransition} from "react-transition-group";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

export default function ThankYouAlt(props) {
    const router = useRouter();

    const MobileView = dynamic(() =>
        import('react-device-detect').then((module) => module.MobileView)
    );
    const WhatsappSvg = dynamic(() =>
        import('../../assets/whatsapp.svg').then((module) => module.ReactComponent)
    );
    const CustomerSupport = dynamic(() => import('../../assets/Advantages/WritingService/CustomerSupport.svg').then(module => module.ReactComponent),);

    return (
        <CSSTransition
            key = {router.pathname}
            in = {true}
            appear = {true}
            timeout = {500}
            unmountOnExit
            classNames = {FadeAnimationsStyles}>
            <div className = {styles.wrapper}>
                <div className = {styles.alternateWrapper} >
                    <CustomerSupport className={styles.illustration} />
                    <h1> Get in Touch </h1>
                    <p>Please drop your CV/Resume on our following WhatsApp Number for further processing</p>
                    <div className={styles.whatsapp}>
                        <WhatsappSvg className={styles.icon} /><p className={styles.number}>  +92-317-4046029 </p>
                    </div>
                </div>
            </div>


        </CSSTransition>
    );
}

