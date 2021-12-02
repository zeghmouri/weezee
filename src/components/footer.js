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
                <img src={logo.src}></img>
                <p>WiFi illimité à l’extérieur, à prix cassé !</p>
                <ul className={styles.navbar}>
                    <li className={styles.navlink}><a href="#">Le concept</a></li>
                    <li className={styles.navlink}><a href="#">L'application</a></li>
                    <li className={styles.navlink}><a href="#">Weezee Map</a></li>
                    <li className={styles.navlink}><a href="#">Nos Tarifs</a></li>
                </ul>
            </div>
            <div className={styles.copyrights}>
                <p>© 2021 Weezee. All rights reserved.</p>
                <ul className={styles.socials}>
                    <li><img src={twitter.src}></img></li>
                    <li><img src={linkedin.src}></img></li>
                    <li><img src={facebook.src}></img></li>
                    <li><img src={instagram.src}></img></li>
                </ul>
            </div>
        </div>
    )
}
