import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import Link from "next/link";
import styles from './Nav.module.css'
import LinkButton from "../Buttons/LinkButton";
import {Menu} from 'lucide-react'

export default function Nav() {

    const [isExpanded, setIsExpanded] = useState(false);

    function toggleMenu() {
        setIsExpanded(!isExpanded);
    }

    return (<>
        <div className={styles.nav}>

            <div className={styles.logo}>
                <Logo/>
                <Link href={"./"}>
                    Logo
                </Link>
            </div>
            <div className={"row"}>
                <Menu onClick={toggleMenu} className={styles.menu}/>
                <div className={isExpanded ? `${styles.buttons} ${styles.open}` :  styles.buttons } >
                    <div className={isExpanded ? `${styles.buttonsSecondary} ${styles.open}` :  styles.buttonsSecondary }>
                        <LinkButton link={'./'} text={'Home'}/>
                        <LinkButton link={'./'} text={'Our Services'}/>
                        <LinkButton link={'./become-a-tutor'} text={'Work as a Tutor'}/>
                        <LinkButton link={'./'} text={'Terms & Conditions'}/>
                    </div>
                    <LinkButton nav={true} link={'./'} text={'Submit Inquiry'}/>
                </div>
            </div>

        </div>

    </>);
}

