import React from 'react';
<<<<<<< HEAD
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
=======
import { useRouter } from 'next/router';
import LinkButton from '../Buttons/LinkButton';
import styles from './Service.module.css';
export default function Service(props) {
  const { pathname } = useRouter();
>>>>>>> 1b2a9b4f07bb9992d389253cd02db2c6c8574556

  return (
    <>
      <div className={styles.main}>
        <div className={styles.image}>{props.image}</div>
        <div className={styles.text}>
          <h4 className={styles.heading}>{props.heading}</h4>
          <p className={styles.description}>{props.description}</p>
          {pathname === '/' && (
            <LinkButton primary={true} text={'Learn More'} link={props.link} />
          )}
        </div>
      </div>
    </>
  );
}
