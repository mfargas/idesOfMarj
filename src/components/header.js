import * as React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import ThemeToggle from "./themeToggle"
import Menu from "./menu"
import * as styles from '../styles/header.module.css'

const Header = ({ siteTitle = "marjiela" }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const close = React.useCallback(() => setMobileOpen(false), [])

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav} aria-label="Main navigation">
        {/* Logo */}
        <h1 className={styles.logoContainer}>
          <Link href="/" className={styles.logo} onClick={close}>
            {siteTitle}
          </Link>
        </h1>

        {/* Desktop nav — hidden on mobile via CSS */}
        <div className={styles.navDesktop}>
          <Menu horizontal />
        </div>

        {/* Right controls: theme toggle + hamburger */}
        <div className={styles.controls}>
          <ThemeToggle />
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div id="mobile-nav" className={styles.mobileNav}>
          <Menu onLinkClick={close} />
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
