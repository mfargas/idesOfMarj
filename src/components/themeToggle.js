import * as React from 'react'
import { useTheme } from '../contexts/themeContext'
import * as styles from '../styles/themeToggle.module.css'

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme()

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className={styles.themeToggle} aria-label="Toggle theme">
        <span className={styles.toggleIcon}>🌓</span>
      </button>
    )
  }

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.toggleIcon}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default ThemeToggle

