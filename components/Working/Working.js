import styles from './Working.module.css';
import {ReactComponent as RightArrow} from '../../assets/rightArrow.svg'
import {ReactComponent as LeftArrow} from '../../assets/leftArrow.svg'

export default function Working(props) {
    return (<>
        <div
            className={`${styles.working} ${props.index % 2 === 1 && styles.rightWorking}`}
        >
            <div
                className={`${styles.content} ${props.index % 2 === 1 && styles.rightContent}`}
            >

                <div className={styles.image}>
                    {props.image}
                </div>
                <div className={styles.text}>
                    <h4 className={styles.heading}>{props.heading}</h4>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>

            </div>
            {props.index!== props.length-1 &&
            <div className={`${styles.arrowWrapper} ${props.index % 2 === 1 && styles.rightWrapper}`}>
                {props.index % 2 === 1 ? <RightArrow className={styles.arrow}/> : <LeftArrow className={styles.arrow}/>}
            </div>
            }

        </div>
    </>);
}
