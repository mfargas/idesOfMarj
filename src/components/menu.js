import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/menu.module.css'

const Menu = () => {
    return(
            <menu>
                <ul className={styles.navMenu}>
                <li className={styles.navItem}> <Link className={styles.navLink} to='/art'>Art</Link></li>
                    <li className={styles.navItem}> <Link className={styles.navLink} to='/'> Blog</Link></li>
                </ul>
            </menu>
        );
}

export default Menu
