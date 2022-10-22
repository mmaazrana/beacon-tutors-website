import styles from "../../styles/SubmitInquiry.module.css";

export function Stepper(props) {
    return <div className = {styles.stepper}>
                {
                    [...Array(3)].map((v, i) =>
                        i < props.step ?
                            <>
                            <div key = {`step-${i}`} className = {`${styles.step} ${styles.activeStep}`}/>
                            <div key = {`step-circle-${i}`}
                                 className = {`${styles.stepCircle} ${styles.activeCircle}`}/>
                            </>
                            :
                            <>
                            <div key = {`step-${i}`} className = {`${styles.step}`}/>
                            <div key = {`step-circle-${i}`} className = {`${styles.stepCircle}`}/>
                            </>
                    )
                }
        <div className = {`${styles.step}`}/>
            </div>;
}