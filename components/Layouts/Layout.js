import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import {ReactComponent as Pattern} from '../../assets/background pattern.svg';
import {motion} from "framer-motion"

export default function Layout({children}) {


    return (<>
            {/*<motion.div style={{opacity: 0}}*/}
            {/*    animate = {{opacity: 1}}*/}
            {/*    transition = {{duration: 0.3}}*/}
            {/*>*/}
                <div className = {'background'}>
                    <Pattern viewBox = "0 0 100% 0"/>
                </div>
                <Nav className = "nav"/>
                <main>{children}</main>
                <Footer/>
            {/*</motion.div>*/}
        </>

    );
}
