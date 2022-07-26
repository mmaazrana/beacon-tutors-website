import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import dynamic from 'next/dynamic';
import animationStyles from "../../styles/Animations/FadeDelayAnimations.module.css";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {useRouter} from "next/router";

export default function Layout({children}) {
    const Pattern = dynamic(() => import('../../assets/background pattern.svg').then((module) => module.ReactComponent));
    const router = useRouter();

    return (<>
            <CSSTransition
                key = {router.pathname}
                in = {true}
                appear = {true}
                timeout = {750}
                unmountOnExit
                classNames = {animationStyles}>

        <div className = {'background'}>
            <Pattern viewBox = "0 0 100% 100%"/>
        </div>
            </CSSTransition>

        <Nav className = "nav"/>

        <main>{children}</main>
        <Footer/>


    </>);
}
