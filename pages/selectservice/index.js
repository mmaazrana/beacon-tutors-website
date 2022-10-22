import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/SubmitInquiry.module.css'
import dynamic from "next/dynamic";
import selectAnimationStyles from "../../styles/Animations/SelectAlternateAnimations.module.css";
import {CSSTransition} from 'react-transition-group';
import LinkButton from "../../components/Buttons/LinkButton";
import fadeAnimationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {Stepper} from "../../components/Stepper/Stepper";

export default function SubmitInquiry(props) {


    const HomeTutoring = dynamic(() => import('../../assets/Advantages/Home/MaleAndFemaleTutors.svg').then(module => module.ReactComponent),);
    const OnlineTutoring = dynamic(() => import('../../assets/Services/online-tutoring.svg').then(module => module.ReactComponent),);
    const ContentWriting = dynamic(() => import('../../assets/Advantages/WritingService/WritingExperts5000.svg').then(module => module.ReactComponent),);

    const [homeLottieClass, setHomeLottieClass] = useState(styles.lottie);
    const [onlineLottieClass, setOnlineLottieClass] = useState(styles.lottie);
    const [contentLottieClass, setContentLottieClass] = useState(styles.lottie);
    const [homeButtonClass, setHomeButtonClass] = useState(styles.button);
    const [onlineButtonClass, setOnlineButtonClass] = useState(styles.button);
    const [contentButtonClass, setContentButtonClass] = useState(styles.button);
    const [homeSelected, setHomeSelected] = useState(false);
    const [onlineSelected, setOnlineSelected] = useState(false);
    const [contentSelected, setContentSelected] = useState(false);

    const [service, setService] = useState();

    function setHomeActive() {
        setHomeLottieClass(`${styles.lottie} ${styles.active}`)
        setHomeButtonClass(`${styles.button} ${styles.selected}`)
        setHomeSelected(true)
        setOnlineButtonClass(styles.button)
        setOnlineSelected(false)
        setContentButtonClass(styles.button)
        setContentSelected(false)
        setService("home")
    }

    function setOnlineActive() {
        setOnlineLottieClass(`${styles.lottie} ${styles.active}`)
        setOnlineButtonClass(`${styles.button} ${styles.selected}`)
        setOnlineSelected(true)
        setHomeButtonClass(styles.button)
        setHomeSelected(false)
        setContentButtonClass(styles.button)
        setContentSelected(false)
        setService("online")
    }

    function setContentActive() {
        setContentLottieClass(`${styles.lottie} ${styles.active}`)
        setContentButtonClass(`${styles.button} ${styles.selected}`)
        setContentSelected(true)
        setHomeButtonClass(styles.button)
        setHomeSelected(false)
        setOnlineButtonClass(styles.button)
        setOnlineSelected(false)
        setService("content")
    }

    return (
        <CSSTransition
            mountOnEnter
            in = {true}
            appear = {true}
            timeout = {750}
            classNames = {fadeAnimationStyles}>
            <div className = {styles.body}>
                <CSSTransition
                    mountOnEnter
                    in = {true}
                    appear = {true}
                    timeout = {750}
                    classNames = {fadeAnimationStyles}>
                    <Stepper step = {2}/>
                </CSSTransition>
            <div className = {styles.mainAlt}>
                <CSSTransition
                    in = {true}
                    appear = {true}
                    timeout = {1000}
                    classNames = {fadeAnimationStyles}>
                <div className = {`${styles.nextButton} ${styles.webView}`}>
                        <LinkButton text = {"Back"} link = {"/selectcity"} primary = {true}/>
                </div>
            </CSSTransition>
                <div className = {styles.wrapper}>

                    <h1 className = {styles.question}>
                        You want to hire?
                    </h1>
                    <div className = {styles.lottieRow}>
                        {homeSelected && <CSSTransition
                            in = {homeSelected}
                            appear = {true}
                            timeout = {1000}
                            classNames = {selectAnimationStyles}>
                            <div>
                                <HomeTutoring className = {homeLottieClass}/>
                            </div>
                        </CSSTransition>} {onlineSelected && <CSSTransition
                        in = {onlineSelected}
                        appear = {true}
                        timeout = {1000}
                        classNames = {selectAnimationStyles}>
                        <div>
                            <OnlineTutoring className = {onlineLottieClass}/>
                        </div>
                    </CSSTransition>} {contentSelected && <CSSTransition
                        in = {contentSelected}
                        appear = {true}
                        timeout = {1000}
                        classNames = {selectAnimationStyles}>
                        <div>
                            <ContentWriting className = {contentLottieClass}/>
                        </div>
                    </CSSTransition>}
                    </div>
                    <div className = {styles.row}>
                        <button onClick = {setHomeActive} className = {homeButtonClass}>Home Tutoring</button>
                        <button onClick = {setOnlineActive} className = {onlineButtonClass}>Online Tutoring</button>
                        <button onClick = {setContentActive} className = {contentButtonClass}>Content Writing</button>
                    </div>

                </div>
                                <div className = {styles.buttonRow}>
                <CSSTransition
                    in = {true}
                    appear = {true}
                    timeout = {1000}
                    classNames = {fadeAnimationStyles}>
                <div className = {`${styles.nextButton} ${styles.mobileView}`}>
                        <LinkButton text = {"Back"} link = {"/selectcity"} primary = {true}/>
                </div>
                </CSSTransition>
                <CSSTransition
                    in = {homeSelected || onlineSelected || contentSelected}
                    appear = {homeSelected || onlineSelected || contentSelected}
                    timeout = {1000}
                    classNames = {fadeAnimationStyles}>
                    <div className = {styles.nextButton}>
                        {(homeSelected || onlineSelected || contentSelected) &&
                            <LinkButton text = {"Next"} link = {"/selectidentity"} primary = {true}
                                        data = {{service: service}}/>
                        }
                    </div>
                </CSSTransition>
            </div>
            </div>
            </div>

        </CSSTransition>
    );
}

SubmitInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
