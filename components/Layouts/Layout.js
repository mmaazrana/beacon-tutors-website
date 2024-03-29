import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import dynamic from 'next/dynamic';
import animationStyles from "../../styles/Animations/FadeDelayAnimations.module.css";
import {CSSTransition,SwitchTransition} from 'react-transition-group';
import {useRouter} from "next/router";

export default function Layout({children}) {
    const Pattern = dynamic(() => import('../../assets/background pattern.svg').then((module) => module.ReactComponent));
    const router = useRouter();

    return (<>
        <SwitchTransition mode='out-in'>
            <CSSTransition
                key = {router.pathname}
                in = {true}
                appear = {true}
                timeout = {1250}
                unmountOnExit
                mountOnEnter
                classNames = {animationStyles}>
                {state => (
        <div className = {'background'}>
            <Pattern width="100%" height="100%" />
        </div>
                )}
            </CSSTransition>
        </SwitchTransition>
        <Nav className = "nav"/>

        <main>{children}</main>
        <Footer/>


    </>);
}
