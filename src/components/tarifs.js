import React from 'react'
import styles from '../../styles/tarifs.module.css'
import checkIcon from '../assets/icons/check.svg'

export default function tarifs() {
    return (
        <div className={styles.tarifs}>
            <div className={styles.content}>
                <p className={styles.subtitle}>Nos Tarifs</p>
                <h2 className={styles.title}>Des tarifs simples, sans mauvaise surprise</h2>
                <p className={styles.brief}>Une tarification simple et transparente qui évolue selon vos besoins. Passez d’un forfait à l’autre facilement depuis votre application.</p>
            </div>
            <div className={styles.priceCard}>
                <h1 className={styles.cardTitle}>4,99€ / mo</h1>
                <h3 className={styles.cardSubtitle}>Weezee Map Premium</h3>
                <p>100 connexions</p>
                <ul className={styles.features}>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Accès à notre base de données de réseaux WiFis aux Antilles</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Créez des QR Codes WiFi</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Partagez votre réseau WiFi avec votre entourage facilement</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Connectez-vous à des réseaux WiFis dans plus de 100 pays dans le monde</p>
                    </li>
                </ul>
            </div>
            <div className={styles.priceCard}>
                <h1 className={styles.cardTitle}>12,99€ / mois</h1>
                <h3 className={styles.cardSubtitle}>Weezee Map Pro</h3>
                <p>Connexions illimitées</p>
                <ul className={styles.features}>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Accès à notre base de données de réseaux WiFis aux Antilles</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Créez des QR Codes WiFi</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Partagez votre réseau WiFi avec votre entourage facilement</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Connectez-vous à des réseaux WiFis dans plus de 100 pays dans le monde</p>
                    </li>
                    <li className={styles.feature}>
                        <img src={checkIcon.src} alt="checkIcon"/>
                        <p>Connexions illimitées</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
