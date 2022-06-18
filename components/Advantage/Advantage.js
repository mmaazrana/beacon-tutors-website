import React from 'react';
import styles from "./Advantage.module.css"

export default function Advantage(props) {
    return (
        <>
            <div className={styles.main} >
                <div className={styles.image} >
                    {props.image}
                </div >
                <div className={styles.text} >
                    <h4 className={styles.heading} >
                        {props.heading}
                    </h4>
                    <p className={styles.description} >
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}

