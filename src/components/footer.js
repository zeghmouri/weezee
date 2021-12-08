import React from 'react'
import styles from '../../styles/footer.module.css'
import logo from '../assets/images/whitelogo.svg'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <img src={logo.src} alt="logo" width="184" height="55"/>
                <p>WiFi illimité à l&apos;extérieur, à prix cassé !</p>
                <ul className={styles.navbar}>
                    <li className={styles.navlink}><a href="#concept">Le concept</a></li>
                    <li className={styles.navlink}><a href="#app">L&apos;application</a></li>
                    <li className={styles.navlink}><a href="#weezeemap">Weezee Map</a></li>
                    <li className={styles.navlink}><a href="#tarifs">Nos Tarifs</a></li>
                </ul>
            </div>
            <div className={styles.copyrights}>
                <p>© 2021 Weezee. All rights reserved.</p>
                <ul className={styles.socials}>
                    <li><a href="https://www.twitter.com/weezeeapp" target="_blank"><img src={twitter.src} alt="twitterIcon" width="24" height="20"/></a></li>
                    <li><a href="https://www.linkedin.com/company/weezee/" target="_blank"><img src={linkedin.src} alt="linkedinIcon" width="24" height="24"/></a></li>
                    <li><a href="https://www.facebook.com/weezeeapp/" target="_blank"><img src={facebook.src} alt="facebookIcon" width="24" height="24"/></a></li>
                    <li><a href="https://www.instagram.com/weezee_app/" target="_blank"><img src={instagram.src} alt="InstagramIcon" width="20" height="20"/></a></li>
                </ul>
            </div>
        </div>
    )
}
