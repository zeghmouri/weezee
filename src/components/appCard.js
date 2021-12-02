import React from 'react'
import styles from '../../styles/appcard.module.css'
import app from '../assets/images/app.png'
import img from '../assets/images/iPhone.png'

export default function appCard() {
    return (
        <div className={styles.appCard}> 
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <p className={styles.subtitle}>+1M Réseaux WiFi référencés dans le monde</p>
                    <h2 className={styles.title}>Chez vous, partout</h2>
                    <p>Profitez d&apos;une connexion optimale dans tous les établissements de notre réseau partenaire. Nous selectionnons les endroits selon leur hospitaliter et leur réseau Internet.</p>
                </div>
                <div className={styles.img}>
                    <img className={styles.app} src={app.src} alt="img" width="616" height="480"/>
                    <img className={styles.phone} src={img.src} alt="img" width="323" height="299"/>
                </div>
            </div>
        </div>
    )
}
