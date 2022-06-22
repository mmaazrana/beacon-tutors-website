import React from 'react';
import LinkButton from "../Buttons/LinkButton";
import styles from "./Service.module.css"
import {useRouter} from "next/router";

export default function Service(props) {

    const {pathName} = useRouter();
    console.log("pathName")
    console.log(pathName)
    return (<>
            <div className={styles.main}>
                <div className={styles.image}>
                    {props.image}
                </div>
                <div className={styles.text}>
                    <h4 className={styles.heading}>
                        {props.heading}
                    </h4>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                    {! (pathName === './assignments') && <LinkButton primary={true} text={"Learn More"} link={props.link}/>}
                </div>
            </div>
        </>);
}

