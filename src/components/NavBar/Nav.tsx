import React from 'react'
import Button from '../Button/Button'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navContainer}>
    <Button type='submit'>Menu</Button>
    <Button type='submit'>Contact</Button>
    <Button type='submit'>Reviews</Button> 
    </div>
  )
}

export default Nav
