import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/SubmitInquiry.module.css'
import dynamic from "next/dynamic";
import selectAlternateAnimationStyles from "../../styles/Animations/SelectAlternateAnimations.module.css";
import {CSSTransition} from 'react-transition-group';
import fadeAnimationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {Stepper} from "../../components/Stepper/Stepper";
import Link from "next/link";

export default function SelectCity(props) {


    const Karachi = dynamic(() => import('../../assets/Cities/Karachi.svg').then(module => module.ReactComponent),);
    const Islamabad = dynamic(() => import('../../assets/Cities/Islamabad.svg').then(module => module.ReactComponent),);
    const Lahore = dynamic(() => import('../../assets/Cities/Lahore.svg').then(module => module.ReactComponent),);
    const Rawalpindi = dynamic(() => import('../../assets/Cities/Rawalpindi.svg').then(module => module.ReactComponent),);
    const Other = dynamic(() => import('../../assets/Cities/Other.svg').then(module => module.ReactComponent),);

    // const [KarachiLottieClass, setKarachiLottieClass] = useState(styles.lottie);
    // const [IslamabadLottieClass, setIslamabadLottieClass] = useState(styles.lottie);
    // const [LahoreLottieClass, setLahoreLottieClass] = useState(styles.lottie);
    // const [RawalpindiLottieClass, setRawalpindiLottieClass] = useState(styles.lottie);
    // const [OtherLottieClass, setOtherLottieClass] = useState(styles.lottie);
    // const [KarachiClass, setKarachiClass] = useState(styles.button);
    // const [IslamabadClass, setIslamabadClass] = useState(styles.button);
    // const [LahoreClass, setLahoreClass] = useState(styles.button);
    // const [RawalpindiClass, setRawalpindiClass] = useState(styles.button);
    // const [OtherClass, setOtherClass] = useState(styles.button);
    // const [KarachiSelected, setKarachiSelected] = useState(false);
    // const [IslamabadSelected, setIslamabadSelected] = useState(false);
    // const [LahoreSelected, setLahoreSelected] = useState(false);
    // const [RawalpindiSelected, setRawalpindiSelected] = useState(false);
    // const [OtherSelected, setOtherSelected] = useState(false);


    // function setKarachiActive() {
    //     setKarachiLottieClass(`${styles.lottie} ${styles.active}`)
    //
    //     setKarachiClass(`${styles.button} ${styles.selected}`)
    //
    //     setIslamabadClass(styles.button)
    //     setLahoreClass(styles.button)
    //     setRawalpindiClass(styles.button)
    //     setOtherClass(styles.button)
    //
    //     setKarachiSelected(true)
    //
    //     setIslamabadSelected(false)
    //     setLahoreSelected(false)
    //     setRawalpindiSelected(false)
    //     setOtherSelected(false)
    //
    // }
    //
    // function setIslamabadActive() {
    //     setIslamabadLottieClass(`${styles.lottie} ${styles.active}`)
    //
    //     setIslamabadClass(`${styles.button} ${styles.selected}`)
    //
    //     setKarachiClass(styles.button)
    //     setLahoreClass(styles.button)
    //     setRawalpindiClass(styles.button)
    //     setOtherClass(styles.button)
    //
    //     setIslamabadSelected(true)
    //
    //     setKarachiSelected(false)
    //     setLahoreSelected(false)
    //     setRawalpindiSelected(false)
    //     setOtherSelected(false)
    //
    // }
    //
    // function setLahoreActive() {
    //     setLahoreLottieClass(`${styles.lottie} ${styles.active}`)
    //     setLahoreClass(`${styles.button} ${styles.selected}`)
    //
    //     setKarachiClass(styles.button)
    //     setIslamabadClass(styles.button)
    //     setRawalpindiClass(styles.button)
    //     setOtherClass(styles.button)
    //
    //     setLahoreSelected(true)
    //
    //     setKarachiSelected(false)
    //     setIslamabadSelected(false)
    //     setRawalpindiSelected(false)
    //     setOtherSelected(false)
    //
    // }
    //
    // function setRawalpindiActive() {
    //     setRawalpindiLottieClass(`${styles.lottie} ${styles.active}`)
    //
    //     setRawalpindiClass(`${styles.button} ${styles.selected}`)
    //
    //     setKarachiClass(styles.button)
    //     setIslamabadClass(styles.button)
    //     setLahoreClass(styles.button)
    //     setOtherClass(styles.button)
    //
    //     setRawalpindiSelected(true)
    //
    //     setKarachiSelected(false)
    //     setIslamabadSelected(false)
    //     setLahoreSelected(false)
    //     setOtherSelected(false)
    //
    // }
    //
    // function setOtherActive() {
    //     setOtherLottieClass(`${styles.lottie} ${styles.active}`)
    //
    //     setOtherClass(`${styles.button} ${styles.selected}`)
    //
    //     setKarachiClass(styles.button)
    //     setIslamabadClass(styles.button)
    //     setLahoreClass(styles.button)
    //     setRawalpindiClass(styles.button)
    //
    //     setOtherSelected(true)
    //
    //     setKarachiSelected(false)
    //     setIslamabadSelected(false)
    //     setLahoreSelected(false)
    //     setRawalpindiSelected(false)
    //
    // }

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
                    <Stepper step = {1}/>
                </CSSTransition>
            <div className = {styles.mainAlt}>
                <div className = {styles.wrapper}>
                    <h1 className = {styles.question}>
                        Select Your City
                    </h1>{/*<div className = {styles.lottieRow}>*/}

                    {/*    {KarachiSelected && <CSSTransition*/} {/*        in = {KarachiSelected}*/} {/*        appear = {true}*/} {/*        timeout = {1000}*/} {/*        classNames = {selectAlternateAnimationStyles}>*/} {/*        <div>*/} {/*            <Karachi className = {KarachiLottieClass}/>*/} {/*        </div>*/} {/*    </CSSTransition>} {IslamabadSelected &&*/} {/*    <CSSTransition*/} {/*        in = {IslamabadSelected}*/} {/*        appear = {true}*/} {/*        timeout = {1000}*/} {/*        classNames = {selectAlternateAnimationStyles}>*/} {/*    <div>*/} {/*        <Islamabad className = {IslamabadLottieClass}/>*/} {/*    </div>*/} {/*    </CSSTransition>*/} {/*} {LahoreSelected &&*/} {/*    <CSSTransition*/} {/*        in = {LahoreSelected}*/} {/*        appear = {true}*/} {/*        timeout = {1000}*/} {/*        classNames = {selectAlternateAnimationStyles}>*/} {/*    <div>*/} {/*        <Lahore className = {LahoreLottieClass}/>*/} {/*    </div>*/} {/*    </CSSTransition>*/} {/*} {RawalpindiSelected &&*/} {/*    <CSSTransition*/} {/*        in = {RawalpindiSelected}*/} {/*        appear = {true}*/} {/*        timeout = {1000}*/} {/*        classNames = {selectAlternateAnimationStyles}>*/} {/*    <div>*/} {/*        <Rawalpindi className = {RawalpindiLottieClass}/>*/} {/*    </div>*/} {/*    </CSSTransition>*/} {/*} {OtherSelected &&*/} {/*    <CSSTransition*/} {/*        in = {OtherSelected}*/} {/*        appear = {true}*/} {/*        timeout = {1000}*/} {/*        classNames = {selectAlternateAnimationStyles}>*/} {/*    <div>*/} {/*        <Other className = {OtherLottieClass}/>*/} {/*    </div>*/} {/*    </CSSTransition>*/} {/*}*/}

                    {/*</div>*/}
                    <div className = {styles.row}>
                        <Link href = {"/selectservice"}>
                            <a className = {`${styles.button} ${styles.green}`}>
                                    <CSSTransition
                                        in = {true}
                                        appear = {true}
                                        timeout = {1000}
                                        classNames = {selectAlternateAnimationStyles}>
                                        <div>
                                            <Karachi className = {styles.lottie}/>
                                        </div>
                                    </CSSTransition>
                                Karachi
                            </a>
                        </Link>
                        <Link href = {"/selectservice"}>
                            <a className = {`${styles.button} ${styles.yellow}`}>
                                <CSSTransition
                                    in = {true}
                                    appear = {true}
                                    timeout = {1000}
                                    classNames = {selectAlternateAnimationStyles}>
                                    <div>
                                        <Islamabad className = {styles.lottie}/>
                                    </div>
                                </CSSTransition>
                                Islamabad
                            </a>
                        </Link>
                        <Link href = {"/selectservice"}>
                            <a className = {`${styles.button} ${styles.violet}`}>
                                <CSSTransition
                                    in = {true}
                                    appear = {true}
                                    timeout = {1000}
                                    classNames = {selectAlternateAnimationStyles}>
                                    <div>
                                        <Lahore className = {styles.lottie}/>
                                    </div>
                                </CSSTransition>
                                Lahore
                            </a>
                        </Link>
                        <Link href = {"/selectservice"}>
                            <a className = {`${styles.button} ${styles.red}`}>
                                <CSSTransition
                                    in = {true}
                                    appear = {true}
                                    timeout = {1000}
                                    classNames = {selectAlternateAnimationStyles}
                                >
                                    <div>
                                        <Rawalpindi className = {styles.lottie}/>
                                    </div>
                                </CSSTransition>
                                Rawalpindi
                            </a>
                        </Link>
                        <Link href = {"/selectservice"}>
                            <a className = {`${styles.button} ${styles.grey}`}>
                                <CSSTransition
                                    in = {true}
                                    appear = {true}
                                    timeout = {1000}
                                    classNames = {selectAlternateAnimationStyles}>
                                    <div>
                                        <Other className = {styles.lottie}/>
                                    </div>
                                </CSSTransition>
                                Other
                            </a>
                        </Link>
                    </div>

                </div>
                {/*<div className = {styles.singleButton}>*/} {/*<CSSTransition*/} {/*    in = {KarachiSelected || LahoreSelected || RawalpindiSelected || IslamabadSelected || OtherSelected}*/} {/*    appear = {KarachiSelected || LahoreSelected || RawalpindiSelected || IslamabadSelected || OtherSelected}*/} {/*    timeout = {1000}*/} {/*    classNames = {fadeAnimationStyles}>*/} {/*    <div className = {styles.nextButton}>*/} {/*        {(KarachiSelected || LahoreSelected || RawalpindiSelected || IslamabadSelected || OtherSelected) &&*/} {/*            <LinkButton text = {"Next"} link = {"/selectservice"} primary = {true}/>*/} {/*        }*/} {/*    </div>*/} {/*</CSSTransition>*/} {/*</div>*/}
            </div>
            </div>

        </CSSTransition>
    );
}

SelectCity.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
