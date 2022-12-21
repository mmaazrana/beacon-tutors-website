import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/SubmitInquiry.module.css'
import dynamic from "next/dynamic";
import selectAnimationStyles from "../../styles/Animations/SelectAlternateAnimations.module.css";
import {CSSTransition} from 'react-transition-group';
import LinkButton from "../../components/Buttons/LinkButton";
import fadeAnimationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {useRouter} from "next/router";
import {Stepper} from "../../components/Stepper/Stepper";
import Link from "next/link";

export default function SubmitInquiry(props) {


    const MaleAndFemaleTutors = dynamic(() => import('../../assets/Advantages/Home/MaleAndFemaleTutors.svg').then(module => module.ReactComponent),);
    const OneOnOneTutoring = dynamic(() => import('../../assets/Advantages/Home/OneOnOneTutoring.svg').then(module => module.ReactComponent),);

    const [studentLottieClass, setStudentLottieClass] = useState(styles.lottie);
    const [teacherLottieClass, setTeacherLottieClass] = useState(styles.lottie);
    const [studentButtonClass, setStudentButtonClass] = useState(styles.button);
    const [teacherButtonClass, setTeacherButtonClass] = useState(styles.button);
    const [studentSelected, setStudentSelected] = useState(false);
    const [teacherSelected, setTeacherSelected] = useState(false);

    const [user, setUser] = useState();

    const router = useRouter()

    const data = router.query;

    function scrollToBottom() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }

    function setStudentActive() {
        setStudentLottieClass(`${styles.lottie} ${styles.active}`)
        setStudentButtonClass(`${styles.button} ${styles.selected}`)
        setTeacherButtonClass(styles.button)
        setStudentSelected(true)
        setTeacherSelected(false)
        setUser("student")
        scrollToBottom()
    }

    function setTeacherActive() {
        setTeacherLottieClass(`${styles.lottie} ${styles.active}`)
        setTeacherButtonClass(`${styles.button} ${styles.selected}`)
        setStudentButtonClass(styles.button)
        setStudentSelected(false)
        setTeacherSelected(true)
        setUser("teacher")
        scrollToBottom()
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
                    <Stepper step = {3}/>
                </CSSTransition>
            <div className = {styles.mainAlt}>
                                <CSSTransition
                                    in = {true}
                                    appear = {true}
                                    timeout = {1000}
                                    classNames = {fadeAnimationStyles}>
                <div className = {`${styles.nextButton} ${styles.webView}`}>
                        <LinkButton text = {"Back"} link = {"/selectservice"} primary = {true}/>
                </div>
            </CSSTransition>
                <div className = {styles.wrapper}>

                    <h1 className = {styles.question}>
                        Who are you?
                    </h1>
                    {/*<div className = {styles.lottieRow}>*/}
                    {/*    {studentSelected && <CSSTransition*/}
                    {/*        in = {studentSelected}*/}
                    {/*        appear = {true}*/}
                    {/*        timeout = {1000}*/}
                    {/*        classNames = {selectAnimationStyles}>*/}
                    {/*        <div>*/}
                    {/*            <OneOnOneTutoring className = {studentLottieClass}/>*/}
                    {/*        </div>*/}
                    {/*    </CSSTransition>*/}
                    {/*    } {teacherSelected && <CSSTransition*/}
                    {/*    in = {teacherSelected}*/}
                    {/*    appear = {true}*/}
                    {/*    timeout = {1000}*/}
                    {/*    classNames = {selectAnimationStyles}>*/}
                    {/*    <div>*/}
                    {/*        <MaleAndFemaleTutors className = {teacherLottieClass}/>*/}
                    {/*    </div>*/}
                    {/*</CSSTransition>}*/}
                    {/*</div>*/}
                    <div className = {styles.row}>
                        <Link href={(data.service === "home") ? "/homeconversion" : "/onlineconversion"}>
                        <a onClick = {setStudentActive} className = {`${styles.button} ${styles.green}`}>
                            <CSSTransition
                                in = {true}
                                appear = {true}
                                timeout = {1000}
                                classNames = {selectAnimationStyles}>
                                <div>
                                    <OneOnOneTutoring className = {styles.lottie}/>
                                </div>
                            </CSSTransition>
                            <div>
                                Parent
                            </div>
                        </a>
                        </Link>
                        <Link href={"/tutorconversion"}>
                        <a onClick = {setTeacherActive} className = {`${styles.button} ${styles.violet}`}>
                            <CSSTransition
                                in = {true}
                                appear = {true}
                                timeout = {1000}
                                classNames = {selectAnimationStyles}>
                                <div>
                                    <MaleAndFemaleTutors className = {styles.lottie}/>
                                </div>
                            </CSSTransition>
                            <div>
                                Teacher
                            </div>
                        </a>
                        </Link>
                    </div>

                </div>
                <CSSTransition
                    in = {true}
                    appear = {true}
                    timeout = {1000}
                    classNames = {fadeAnimationStyles}>
                <div className = {`${styles.nextButton} ${styles.mobileView}`}>
                        <LinkButton text = {"Back"} link = {"/selectservice"} primary = {true}/>
                </div>
                </CSSTransition>

                {/*<div className = {styles.buttonRow}>*/}

                {/*<CSSTransition*/}
                {/*    in = {studentSelected || teacherSelected}*/}
                {/*    appear = {studentSelected || teacherSelected}*/}
                {/*    timeout = {1000}*/}
                {/*    classNames = {fadeAnimationStyles}>*/}
                {/*    <div className = {styles.nextButton}>*/}
                {/*        {(studentSelected || teacherSelected) &&*/}
                {/*            <LinkButton text = {"Next"}*/}
                {/*                        link = {(data.service === "home" && studentSelected) ? "/homeconversion" : (data.service === "online" && studentSelected) ? "/onlineconversion" : "/tutorconversion"}*/}
                {/*                        primary = {true}/>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</CSSTransition>*/}
                {/*</div>*/}
            </div>
            </div>

        </CSSTransition>
    );
}

SubmitInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
