import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/layout.module.css"

import Header from "./header"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="marjiela" />
      <Sidebar siteTitle="marjiela" />
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>Marjoree E. F. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
