import styles from "./Home.module.css";
import React from 'react'
import Nav from '../NavBar/Nav'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.navContainer}>
            <Nav/>
        </div>
      
    </div>
  )
}

export default Home
