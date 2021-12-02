import React from 'react'
import styles from '../../styles/concept.module.css'
import img from '../assets/images/conceptimg.png'
import cercle from '../assets/icons/cercle.svg'
import phone from '../assets/icons/phone.svg'
import img2 from '../assets/images/iPhone12.png'

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
                        <img src={cercle.src} alt="icon" width="56" height="56"/>
                        <p>Vérifiez quotidiennement le nombre de connexions qu&apos;il vous reste en 1 clic.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={phone.src} alt="icon" width="56" height="56"/>
                        <p>Aucune configuration requise / Fonctionne avec tous les appareils.</p>
                    </div>
                </div>
                <div className={styles.img}>
                    <img className={styles.conceptImg} src={img.src} alt="img" width="777" height="552"/>
                    <img className={styles.phone} src={img2.src} alt="phone" width="315" height="488"/>
                </div>
            </div>
        </div>
    )
}
