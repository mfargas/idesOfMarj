import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/menu.module.css'

class Menu extends React.Component {
    render(){
    return(
            <menu>
                <ul className={styles.navMenu}>
                <li className={styles.navItem}> <Link className={styles.navLink} to='/page-2/'>Art</Link></li>
                    <li className={styles.navItem}> <Link className={styles.navLink} to='/'> Blog</Link></li>
                </ul>
            </menu>
        );
    }
}

export default Menu
