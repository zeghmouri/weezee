import React from 'react'
import styles from '../../styles/header.module.css'
import logo from '../assets/images/logo.svg'

console.log(logo)

export default function header() {
    return (
        <div className={styles.header}>
            <ul className={styles.navbar}>
                    <li className={styles.logo}><a href="/"><img src={logo.src} /></a></li>
                    <li className={styles.navlink}><a href="#">Le concept</a></li>
                    <li className={styles.navlink}><a href="#">L'application</a></li>
                    <li className={styles.navlink}><a href="#">Weezee Map</a></li>
                    <li className={styles.navlink}><a href="#">Nos Tarifs</a></li>
            </ul>
            <button className={styles.btn}>Me prevenir lorsque l'app sera disponible</button>
        </div>
    )
}
