import React from 'react';
import LinkButton from "../Buttons/LinkButton";
import styles from "./Service.module.css"
export default function Service(props) {
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
                    <LinkButton primary={true} text={"Learn More"}  link={props.link} />
                </div>
            </div>
        </>
    );
}

