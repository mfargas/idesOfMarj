import * as React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

import * as styles from '../styles/header.module.css'

const Header = ({ siteTitle = "marjiela" }) => (
  <header className={styles.header} >
    <nav className={styles.headerNav}>
      <h1 className={styles.logoContainer}>
        <Link
          href="/"
          className={styles.logo}>
          {siteTitle}
        </Link>
      </h1>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
