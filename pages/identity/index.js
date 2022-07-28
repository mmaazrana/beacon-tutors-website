import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/SubmitInquiry.module.css'
import dynamic from "next/dynamic";
import selectAnimationStyles from "../../styles/Animations/SelectAnimations.module.css";
import {CSSTransition} from 'react-transition-group';
import LinkButton from "../../components/Buttons/LinkButton";
import fadeAnimationStyles from "../../styles/Animations/FadeAnimations.module.css";

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
            <div className = {styles.body} >

            <div className = {styles.main}>
                <div className = {styles.wrapper}>

                    <h1 className = {styles.question}>
                        Who are you?
                    </h1>
                    <div className = {styles.lottieRow}>
                        <CSSTransition
                            mountOnEnter
                            in = {studentSelected}
                            appear = {true}
                            timeout = {1000}
                            classNames = {selectAnimationStyles}>
                            <div>
                                <OneOnOneTutoring className = {studentLottieClass}/>
                            </div>
                        </CSSTransition> <CSSTransition
                        mountOnEnter
                        in = {teacherSelected}
                        appear = {true}
                        timeout = {1000}
                        classNames = {selectAnimationStyles}>
                        <div>
                            <MaleAndFemaleTutors className = {teacherLottieClass}/>
                        </div>
                    </CSSTransition>
                    </div>
                    <div className = {styles.row}>
                        <button onClick = {setStudentActive} className = {studentButtonClass}>Student/Parent</button>
                        <button onClick = {setTeacherActive} className = {teacherButtonClass}>Teacher</button>
                    </div>

                </div>
                <CSSTransition
                    mountOnEnter
                    in = {studentSelected || teacherSelected}
                    appear = {studentSelected || teacherSelected}
                    timeout = {1000}
                    classNames = {fadeAnimationStyles}>
                    <div className = {styles.nextButton}>
                        {(studentSelected || teacherSelected) &&
                            <LinkButton text = {"Next"} link = {"/inquiryform"} primary = {true} data={{user:user}}/>
                        }
                    </div>
                </CSSTransition>
            </div>
            </div>

        </CSSTransition>
    );
}

SubmitInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
