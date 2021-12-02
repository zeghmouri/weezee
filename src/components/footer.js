import React from 'react'
import styles from '../../styles/footer.module.css'
import logo from '../assets/images/whitelogo.svg'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'


export default function footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <img src={logo.src} alt="logo"/>
                <p>WiFi illimité à l’extérieur, à prix cassé !</p>
                <ul className={styles.navbar}>
                    <li className={styles.navlink}><a href="#concept">Le concept</a></li>
                    <li className={styles.navlink}><a href="#app">L application</a></li>
                    <li className={styles.navlink}><a href="#map">Weezee Map</a></li>
                    <li className={styles.navlink}><a href="#tarifs">Nos Tarifs</a></li>
                </ul>
            </div>
            <div className={styles.copyrights}>
                <p>© 2021 Weezee. All rights reserved.</p>
                <ul className={styles.socials}>
                    <li><img src={twitter.src} alt="twitterIcon"/></li>
                    <li><img src={linkedin.src} alt="linkedinIcon"/></li>
                    <li><img src={facebook.src} alt="facebookIcon"/></li>
                    <li><img src={instagram.src} alt="InstagramIcon"/></li>
                </ul>
            </div>
        </div>
    )
}
