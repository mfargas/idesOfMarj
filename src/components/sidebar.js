import * as React from "react"
import Menu from './menu'

import * as styles from '../styles/sidebar.module.css'

const Sidebar = () => (
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <Menu />
        </div>
    </aside>
)

export default Sidebar
