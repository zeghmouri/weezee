import React from 'react'
import styles from '../../styles/weezeemap.module.css'
import img from '../assets/images/img.png'
import cercle from '../assets/icons/cercle.svg'
import phone from '../assets/icons/phone.svg'

export default function weezeeMap() {
    return (
        <div id="weezeemap" className={styles.weezeeMap}>
            <div className={styles.img}>
                <img src={img.src} alt="img" width="576" height="513"/>
            </div>
            <div className={styles.content}>
                <p className={styles.subtitle}>Weezee Map</p>
                <h1 className={styles.title}>À l’extérieur, économisez les Go de votre forfait</h1>   
                <div className={styles.feature}>
                        <img src={cercle.src} alt="icon" width="56" height="56"/>
                        <p>Plus d’1M de Réseaux WiFi référencés partout dans le monde</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={phone.src} alt="icon" width="56" height="56"/>
                        <p>+100k réseaux aux Antilles</p>
                    </div>
            </div>
        </div>
    )
}
