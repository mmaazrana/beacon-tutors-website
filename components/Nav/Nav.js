import React, {useState} from 'react';
import Link from "next/link";
import styles from './Nav.module.css'
import LinkButton from "../Buttons/LinkButton";
import {Menu} from 'lucide-react'
import {ReactComponent as Logo3} from "../../assets/beacon-tutors.svg";
import {useRouter} from "next/router";
// import dynamic from "next/dynamic";
export default function Nav() {

    const [isExpanded, setIsExpanded] = useState(false);

    // const Logo3 = dynamic(() => import('../../assets/beacon-tutors.svg').then(module => module.ReactComponent),);

    function toggleMenu() {
        setIsExpanded(!isExpanded);
    }
    const router = useRouter()

    return (<>
        <div className={styles.nav}>

            <div className={styles.logo}>
                <Logo3 height={'25px'} width={'200px'} />
                <Link href={"/"}>
                    Logo
                </Link>
            </div>
            <div className={"row"}>
                <Menu onClick={toggleMenu} className={styles.menu}/>
                <div className={isExpanded ? `${styles.buttons} ${styles.open}` :  styles.buttons } >
                    <div className={isExpanded ? `${styles.buttonsSecondary} ${styles.open}` :  styles.buttonsSecondary }>
                        <LinkButton link={'/'} text={'Home'}/>
                        <LinkButton link={'/'} hash={'services'} text={'Our Services'} />
                        <LinkButton link={'/work'} text={'Work as a Tutor'}/>
                        <LinkButton link={'/terms'} text={'Terms & Conditions'}/>
                    </div>
                    <LinkButton nav={true} link={'/'} text={'Submit Inquiry'}/>
                </div>
            </div>

        </div>

    </>);
}

