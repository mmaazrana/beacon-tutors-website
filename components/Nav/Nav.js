import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import styles from './Nav.module.css'
import LinkButton from "../Buttons/LinkButton";
import {Menu} from 'lucide-react'
import {ReactComponent as Logo3} from "../../assets/beacon-tutors.svg";
import {useRouter} from "next/router";

export default function Nav() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isExpanded) {
                    setIsExpanded(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, isExpanded]);
    }


    useEffect(() => {
        return () => {

        if (isClosed) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
        };

    }, [isClosed]);


    function toggleMenu() {
        setIsClosed(!isClosed)
    }

    const router = useRouter()

    const dropDownRef = useRef(null);
    useOutsideAlerter(dropDownRef);
    return (<>
        <div className = {styles.nav}>

            <div className = {styles.logo}>
                <Logo3 height = {'25px'} width = {'200px'}/> <Link href = {"/"}> Logo </Link>
            </div>
            <div className = {"row"}>
                <Menu onClick = {toggleMenu} className = {styles.menu}/>
                <div ref = {dropDownRef} className = {isExpanded ? `${styles.buttons} ${styles.open}` : styles.buttons}>
                    <div
                        className = {isExpanded ? `${styles.buttonsSecondary} ${styles.open}` : styles.buttonsSecondary}
                        onClick={()=>{setIsExpanded(false);setIsClosed(false);}}
                    >
                        <LinkButton link = {'/'} text = {'Home'}/> <LinkButton link = {'/'} hash = {'services'}
                                                                               text = {'Our Services'}/> <LinkButton
                        link = {'/work'} text = {'Work as a Tutor'}/> <LinkButton link = {'/terms'}
                                                                                  text = {'Terms & Conditions'}/>
                    </div>
                    <LinkButton nav = {true} link = {'/selectcity'} text = {'Contact Us'}/>
                </div>
            </div>

        </div>

    </>);
}

