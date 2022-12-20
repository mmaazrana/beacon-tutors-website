import styles from './Footer.module.css';
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Nav() {

    const WhatsappIcon = dynamic(() =>
        import('../../assets/Icons/whatsapp.svg').then((module) => module.ReactComponent)
    );
    const CallIcon = dynamic(() =>
        import('../../assets/Icons/call.svg').then((module) => module.ReactComponent)
    );
    const FacebookIcon = dynamic(() =>
        import('../../assets/Icons/facebook.svg').then((module) => module.ReactComponent)
    );
    const InstagramIcon = dynamic(() =>
        import('../../assets/Icons/instagram.svg').then((module) => module.ReactComponent)
    );

    return (
        <div className = {styles.footer}>
            <div className={styles.footerTop}>
            <div className={styles.column} >
                <h4 className={styles.services} >Our Services</h4>
                <div className={styles.row} >
                    <Link href = {"/onlinetutoring"}>
                        <a>
                            Online Tutoring
                        </a>
                    </Link>
                    <Link href = {"/hometutoring"}>
                        <a>
                            Home Tutoring
                        </a>
                    </Link>
                    <Link href = {"/assignments"}>
                        <a>
                            Writing Service
                        </a>
                    </Link>
                </div>
            </div>
                <div className={styles.column} >
                    <div className={styles.row} >
                        <h4>Contact Us</h4>
                        <div className={styles.socialRow}>
                        <a href = {'https://wa.me/923136612514?text=I+want+to+talk+with+an+agent.+Is+there+anyone+available+to+chat%3F'} >
                            <WhatsappIcon/>
                        </a>
                        <a href = {'tel: 03136612514'}>
                            <CallIcon/>
                        </a>
                        </div>
                    </div>
                    <div className={styles.row} >
                        <h4>Follow Us</h4>
                        <div className={styles.socialRow}>
                            <a href={"https://web.facebook.com/beacontutorspk"} >
                                <FacebookIcon/>
                            </a>
                            <a href={"https://www.instagram.com/beacontutorspk/"} >
                                <InstagramIcon/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBase} >
                  Copyright © 2022 beacon tutors | Powered by ibexITgroup
            </div>
    </div>
    );
}
