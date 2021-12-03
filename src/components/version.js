import React from 'react'
import styles from '../../styles/version.module.css'
import phone from '../assets/images/iPhone12pro.png'
import appstore from '../assets/images/appstorebtn.svg'
import playstore from '../assets/images/playstorebtn.svg'
import arrow from '../assets/icons/arrow.svg'

export default function Version() {
    return (
        <div className={styles.versionContainer}>
            <div className={styles.content}>
                <p className={styles.subtitle}> Version 2.0</p>
                <h1 className={styles.title}>WiFi illimité à l&apos;extérieur, à prix cassé !</h1>
                <p className={styles.brief}>Depuis 2014, notre mission est la même : vous connecter facilement aux réseaux WiFis proche de vous grâce à une application complète et novatrice.</p>
                <div className={styles.btnGrp}>
                    <img src={appstore.src} alt="appstorebutton" height="45" width="132"/>
                    <img src={playstore.src} alt="playstorebutton" height="45" width="149"/>
                </div>
                <div className={styles.newVersion}>
                    <h3 >Nouvelle version<br/>bientôt disponible</h3>
                    <img src={arrow.src} alt="arrowIcon" height="85" width="48"/>
                </div>
            </div>
            <div className={styles.img}>
                <img src={phone.src} alt="img" height="722" width="532"/>
            </div>
        </div>
    )
}
