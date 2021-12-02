import React from 'react'
import styles from '../../styles/appcard.module.css'
import app from '../assets/images/app.png'

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
                    <img src={app.src} alt="img"/>
                </div>
            </div>
        </div>
    )
}
