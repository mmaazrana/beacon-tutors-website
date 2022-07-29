import React from 'react';
import styles from './ThankYou.module.css'
import FadeAnimationsStyles from "../../styles/Animations/FadeAnimations.module.css";
import {CSSTransition} from "react-transition-group";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function ThankYouAlt(props) {
    const router = useRouter();
    const data = router.query;
    console.log("\n\n\ndata\n\n\n")
    console.log(data)
    console.log("\n\n\ndata\n\n\n")
    const MobileView = dynamic(() =>
        import('react-device-detect').then((module) => module.MobileView)
    );
    const WebView = dynamic(() =>
        import('react-device-detect').then((module) => module.BrowserView)
    );
    const WhatsappSvg = dynamic(() =>
        import('../../assets/whatsapp.svg').then((module) => module.ReactComponent)
    );
    const CustomerSupport = dynamic(() => import('../../assets/Advantages/WritingService/CustomerSupport.svg').then(module => module.ReactComponent),);

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
                <div className = {styles.alternateWrapper} >
                    <CustomerSupport className={styles.illustration} />
                    <h1> Get in Touch </h1>
                    {data.status === "conflict" ?
                        <>
                        <WebView>
                            <p>Thank you for submitting your inquiry, please contact on the number below for further information</p>
                        </WebView>
                        <MobileView>
                            <p>Thank you for submitting your inquiry, please click on the link below to talk with on of our agents</p>
                        </MobileView>
                        </>
                        :
                        <p>Please drop your CV/Resume on our following WhatsApp Number for further processing</p>
                    }
                    <div className={styles.whatsapp}>
                        <WhatsappSvg className={styles.icon} /><p className={styles.number}>
                        <MobileView>
                          <Link href={'https://wa.me/923136612514?text=I+want+to+talk+with+an+agent.+Is+there+anyone+available+to+chat%3F'} ><a>+92-313-6612514</a></Link>
                        </MobileView>
                        <WebView>
                            +92-317-4046029
                        </WebView>
                    </p>
                    </div>
                </div>
            </div>


        </CSSTransition>
    );
}

