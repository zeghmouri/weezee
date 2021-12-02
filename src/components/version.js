import React from 'react'
import styles from '../../styles/version.module.css'
import phone from '../assets/images/iPhone12pro.png'
import appstore from '../assets/images/appstorebtn.svg'
import playstore from '../assets/images/playstorebtn.svg'
import arrow from '../assets/icons/arrow.svg'

export default function version() {
    return (
        <div className={styles.versionContainer}>
            <div className={styles.content}>
                <p className={styles.subtitle}> Version 2.0</p>
                <h1 className={styles.title}>WiFi illimité à l&apos;extérieur, à prix cassé !</h1>
                <p className={styles.brief}>Depuis 2014, notre mission est la même : vous connecter facilement aux réseaux WiFis proche de vous grâce à une application complète et novatrice.</p>
                <div className={styles.btnGrp}>
                    <img src={appstore.src} alt="appstorebutton"/>
                    <img src={playstore.src} alt="playstorebutton"/>
                </div>
                <div className={styles.newVersion}>
                    <h3 >Nouvelle version<br/>bientôt disponible</h3>
                    <img src={arrow.src} alt="arrowIcon"/>
                </div>
            </div>
            <div className={styles.img}>
                <img src={phone.src} alt="img"/>
            </div>
        </div>
    )
}
