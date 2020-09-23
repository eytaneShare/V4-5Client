import React from 'react'
import styles from './Header.module.css'
import logo from '../../logo.svg'
import ShoppingCart from '../ShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <h1 className={styles.title}>Go F
            <FontAwesomeIcon icon={faFutbol}/>
            <FontAwesomeIcon icon={faFutbol}/>t</h1>
            
            <ShoppingCart/>
        </div>
       <br/>
        </>
    )
}

export default Header
