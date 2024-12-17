import styles from "./Home.module.css";
import React from 'react'
import Nav from '../NavBar/Nav'
import Burger from '../Assets/Burger.png'
import Copy from '../Assets/Copy.jpg'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.navContainer}>
            <Nav/>
        </div>
        <div className={styles.Burger}>
            <img src ={Burger.src}/>
        </div>
        
        <div className={styles.footerContainer}>
            <p>This Buger Joint has been around for a long time and has the best burgers in the United States of America!</p>
            
            <p><img src ={Copy.src} width={15}/> GA Burgers</p>
        </div>
    </div>
  )
}

export default Home
