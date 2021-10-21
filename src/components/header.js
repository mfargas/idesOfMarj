import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from './menu'

import * as styles from '../styles/header.module.css' 

const Header = ({ siteTitle }) => (
  <header className={styles.header} >
    <nav className={styles.headerNav}>
      <h1 className={styles.logoContainer}>
        <Link
          to="/"
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

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
