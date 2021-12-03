import React, {useState,useEffect} from 'react'
import styles from '../../styles/header.module.css'
import logo from '../assets/images/logo.svg'
import icon from '../assets/icons/humburger.svg'


export default function Header() {
    const [headerStyle, setHeaderStyle]=useState({});
    const [navDisplayed, setNavDisplayed]=useState(false);
    function toglleNav(){
        if(!navDisplayed){
           setHeaderStyle({
            height: '400px',
            transition: 'height 1s ease',
            
        }); 
        setNavDisplayed(true);
        }
        else{
            setHeaderStyle({height: '60px',
            transition: 'height 1s ease',});
            setNavDisplayed(false);
        }
        
    }
    return (
        <div style={headerStyle} className={styles.header}>
            <div  className={styles.navbar}>
                    <div className={styles.logo}>
                        <a href="/"><img src={logo.src} alt="logo" height="56" width="184"/></a>
                        <button onClick={toglleNav} type="button"><img src={icon.src} className={styles.icon} alt="icon" /> </button>   
                    </div>
                    <ul className={styles.navlinks}>
                        <li className={styles.navlink}><a href="#concept">Le concept</a></li>
                        <li className={styles.navlink}><a href="#app">L&apos;application</a></li>
                        <li className={styles.navlink}><a href="#weezeemap">Weezee Map</a></li>
                        <li className={styles.navlink}><a href="#tarifs">Nos Tarifs</a></li>
                    </ul>
            </div>
            <a href="#newsletter" className={styles.btn}>Me prevenir lorsque l&apos;app sera disponible</a>
        </div>
    )
}
