import React,{useState} from 'react'
import styles from '../../styles/newsletter.module.css'
import img from '../assets/images/newsletter.png'

export default function Newsletter() {
    const [style, setstyle] = useState({});

    function submit(){
        setstyle({display:"block"});
    }
    return (
        <div id="newsletter" className={styles.newsletter}>
            <div className={styles.content}>
                <h1 className={styles.title}>Soyez le premier au courant quand nous lançons le service</h1>
                <form>
                    <input type="mail" placeholder="Entrez votre email"/>
                    <button onClick={submit} type="button">M&apos;avertir</button>
                    <p style={style}>Mail enregistré ! Nous vous contacterons bientôt</p>
                </form>
            </div>
            <div className={styles.img}>
                <img src={img.src} alt="img" width="576" height="512"/>
            </div>
        </div>
    )
}
