import React from 'react'
import styles from '../../styles/concept.module.css'
import img from '../assets/images/conceptimg.png'
import cercle from '../assets/icons/cercle.svg'
import phone from '../assets/icons/phone.svg'

export default function concept() {
    return (
        <div className={styles.conceptContainer}>
            <div className={styles.head}>
                <p className={styles.subtitle}> Le concept </p>
                <h2 className={styles.title}>Connexion Automatique au WiFi autours de vous</h2>
                <p className={styles.brief}>Grâce à notre réseau de partenaires, nous vous connectons automatiquement aux réseaux WiFis proches de chez vous. Aucune configuration requise.</p>
            </div>
            <div className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.feature}>
                        <img src={cercle.src}></img>
                        <p>Vérifiez quotidiennement le nombre de connexions qu'il vous reste en 1 clic.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={phone.src}></img>
                        <p>Aucune configuration requise / Fonctionne avec tous les appareils.</p>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={img.src}></img>
                </div>
            </div>
        </div>
    )
}
