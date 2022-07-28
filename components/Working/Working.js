import styles from './Working.module.css';
import {ReactComponent as RightArrow} from '../../assets/rightArrow.svg'
import {ReactComponent as LeftArrow} from '../../assets/leftArrow.svg'
import {ReactComponent as AltRightArrow} from '../../assets/altRightArrow.svg'
import {ReactComponent as AltLeftArrow} from '../../assets/altLeftArrow.svg'
import {useState} from "react";
import {CSSTransition} from 'react-transition-group';
import {Waypoint} from "react-waypoint";
import scaleLeftAnimationStyles from "../../styles/Animations/ScaleXLeftAnimations.module.css";
import scaleRightAnimationStyles from "../../styles/Animations/ScaleXRightAnimations.module.css";
import fadeDelayAnimations from "../../styles/Animations/FadeDelayAnimations.module.css";
import scaleFadeDelayedAnimations from "../../styles/Animations/ScaleFadeDelayedAnimations.module.css";
import strokeAnimation from "../../styles/Animations/StrokeAnimations.module.css";

export default function Working(props) {
    const [scrollIn, setScrollIn] = useState(false);

    return (<>
        <Waypoint
            topOffset={"55px"}
            scrollableAncestor={"window"}
            onEnter = {() => {
                setScrollIn(true)
            }}
        >
        <div
            className={`${styles.working} ${props.index % 2 === 1 && styles.rightWorking}`}
        >
            <CSSTransition
                mountOnEnter
                in = {scrollIn}
                appear = {scrollIn}
                timeout = {750}
                classNames = {props.index % 2 === 1 ? scaleRightAnimationStyles : scaleLeftAnimationStyles}>
            <div
                className={`${styles.content} ${props.index % 2 === 1 && styles.rightContent}`}
            >
                <CSSTransition
                    mountOnEnter
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {1000}
                    classNames = {scaleFadeDelayedAnimations}>
                <div className={styles.image}>
                    {props.image}
                </div>
                </CSSTransition>
                <CSSTransition
                    mountOnEnter
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {1000}
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
                    mountOnEnter
                    in = {scrollIn}
                    appear = {scrollIn}
                    timeout = {5500}
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
