import React from 'react'
import styles from '../../styles/header.module.css'
import logo from '../assets/images/logo.svg'
import icon from '../assets/icons/humburger.svg'

export default function header() {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a href="/"><img src={logo.src} alt="logo"/></a>
                        <img src={icon.src} className={styles.icon} alt="icon"/>    
                    </div>
                    <ul className={styles.navlinks}>
                        <li className={styles.navlink}><a href="#concept">Le concept</a></li>
                        <li className={styles.navlink}><a href="#app">L&apos;application</a></li>
                        <li className={styles.navlink}><a href="#map">Weezee Map</a></li>
                        <li className={styles.navlink}><a href="#tarif">Nos Tarifs</a></li>
                    </ul>
            </div>
            <div className={styles.btn}>Me prevenir lorsque l&apos;app sera disponible</div>
        </div>
    )
}
