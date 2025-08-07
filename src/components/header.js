import * as React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import Menu from './menu'

import * as styles from '../styles/header.module.css'

const Header = ({ siteTitle = "ides of Marge" }) => (
  <header className={styles.header} >
    <nav className={styles.headerNav}>
      <h1 className={styles.logoContainer}>
        <Link
          href="/"
          className={styles.logo}>
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
