import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/layout.module.css"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      {/* Skip-to-content for keyboard / screen reader users */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Animated aurora background — decorative, hidden from AT */}
      <div className="aurora-wrap" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      <Header siteTitle="marjiela" />
      <main id="main-content" className={styles.mainContent}>
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
