import styles from './Working.module.css';
import {ReactComponent as RightArrow} from '../../assets/rightArrow.svg'
import {ReactComponent as LeftArrow} from '../../assets/leftArrow.svg'
import {ReactComponent as AltRightArrow} from '../../assets/altRightArrow.svg'
import {ReactComponent as AltLeftArrow} from '../../assets/altLeftArrow.svg'
import {useState} from "react";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {Waypoint} from "react-waypoint";
import scaleLeftAnimationStyles from "../../styles/Animations/ScaleXLeftAnimations.module.css";
import scaleRightAnimationStyles from "../../styles/Animations/ScaleXRightAnimations.module.css";
import fadeDelayAnimations from "../../styles/Animations/FadeDelayAnimations.module.css";
import scaleFadeDelayedAnimations from "../../styles/Animations/ScaleFadeDelayedAnimations.module.css";
import strokeAnimation from "../../styles/Animations/StrokeAnimations.module.css";

export default function Working(props) {
    const [scrollIn, setScrollIn] = useState(false);

    // const RightArrow = dynamic(() =>
    //     import('../../assets/rightArrow.svg').then((module) => module.ReactComponent)
    // );
    //
    // const LeftArrow = dynamic(() =>
    //     import('../../assets/leftArrow.svg').then((module) => module.ReactComponent)
    // );
    //
    // const AltRightArrow = dynamic(() =>
    //     import('../../assets/altRightArrow.svg').then((module) => module.ReactComponent)
    // );
    //
    // const AltLeftArrow = dynamic(() =>
    //     import('../../assets/altLeftArrow.svg').then((module) => module.ReactComponent)
    // );

    return (<>
        <Waypoint
            topOffset={"55px"}
            scrollableAncestor={"window"}
            onEnter = {() => {
                setScrollIn(true)
                console.log("entered")
            }}
            onLeave = {() => {
                setScrollIn(false)
            }}
        >
        <div
            className={`${styles.working} ${props.index % 2 === 1 && styles.rightWorking}`}
        >
            <CSSTransition
                in = {scrollIn}
                appear = {scrollIn}
                timeout = {250}
                classNames = {props.index % 2 === 1 ? scaleRightAnimationStyles : scaleLeftAnimationStyles}>
            <div
                className={`${styles.content} ${props.index % 2 === 1 && styles.rightContent}`}
            >
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {500}
                    classNames = {scaleFadeDelayedAnimations}>
                <div className={styles.image}>
                    {props.image}
                </div>
                </CSSTransition>
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {500}
                    classNames = {fadeDelayAnimations}>
                <div className={styles.text}>
                    <h4 className={`${styles.heading} ${props.index % 2 === 1 && styles.rightHeading}`}>{props.heading}</h4>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>
                </CSSTransition>
            </div>
            </CSSTransition>

            {props.index!== props.length-1 &&
                <CSSTransition
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {5000}
                    classNames = {strokeAnimation}>
            <div className={`${styles.arrowWrapper} ${props.index % 2 === 1 && styles.rightWrapper}`}>
                {props.index % 2 === 1 ?
                    <><RightArrow className={styles.arrow}/> <AltRightArrow className={styles.altArrow}/></>
                    :
                    <> <LeftArrow className={styles.arrow}/> <AltLeftArrow className={styles.altArrow} /> </>}
            </div>
                </CSSTransition>

            }

        </div>
        </Waypoint>
    </>);
}
