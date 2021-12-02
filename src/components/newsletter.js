import React from 'react'
import styles from '../../styles/newsletter.module.css'
import img from '../assets/images/newsletter.png'

export default function newsletter() {
    return (
        <div className={styles.newsletter}>
            <div className={styles.content}>
                <h1 className={styles.title}>Soyez le premier au courant quand nous lançons le service</h1>
                <form>
                    <input type="mail" placeholder="Entrez votre email"/>
                    <button type="submit">M&apos;avertir</button>
                    <p>Mail enregistré ! Nous vous contacterons bientôt</p>
                </form>
            </div>
            <div className={styles.img}>
                <img src={img.src} alt="img" width="576" height="512"/>
            </div>
        </div>
    )
}
