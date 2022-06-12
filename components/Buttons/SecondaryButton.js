import React from 'react';
import styles from "./Button.module.css";

function SecondaryButton(props) {
    return (
        <>
            <button className={styles.secondary} onClick={props.onClick} >{props.text}</button>
        </>
    );
}

export default SecondaryButton;