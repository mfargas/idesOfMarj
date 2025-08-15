import * as React from 'react'
import Link from 'next/link'

import * as styles from '../styles/menu.module.css'

const Menu = () => {
    return (
        <menu>
            <ul className={styles.navMenu}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href='/art'> GALLERY </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href='/blog'> IDES </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href='/about'> MARJ </Link>
                </li>
            </ul>
        </menu>
    )
}

export default Menu
