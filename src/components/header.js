import React from 'react'
import styles from '../../styles/header.module.css'
import logo from '../assets/images/logo.svg'

export default function header() {
    return (
        <div className={styles.header}>
            <ul className={styles.navbar}>
                    <li className={styles.logo}><a href="/"><img src={logo.src} alt="logo"/></a></li>
                    <li className={styles.navlink}><a href="#concept">Le concept</a></li>
                    <li className={styles.navlink}><a href="#app">L&apos;application</a></li>
                    <li className={styles.navlink}><a href="#map">Weezee Map</a></li>
                    <li className={styles.navlink}><a href="#tarif">Nos Tarifs</a></li>
            </ul>
            <div className={styles.btn}>Me prevenir lorsque l&apos;app sera disponible</div>
        </div>
    )
}
