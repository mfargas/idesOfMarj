import * as React from 'react'
import Link from 'next/link'
import * as styles from '../styles/homeHero.module.css'

const TOPICS = ['Interactive Media', 'Dev Log', 'Animation', 'Storytelling', 'Media Studies']

const HomeHero = () => (
  <header className={styles.hero}>
    <h1 className={styles.siteTitle}>MARJIELA</h1>
    <p className={styles.tagline}>Frontend Developer · Creative Technologist · Indie Developer</p>

    <div className={styles.divider} />

    <div className={styles.metaRow}>
      <ul className={styles.topics} aria-label="Topics">
        {TOPICS.map((t) => (
          <li key={t} className={styles.topic}>{t}</li>
        ))}
      </ul>

      <div className={styles.handles}>
        <a
          href="https://marjoree.com/projects"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.handle}
        >
          Projects ↗
        </a>
        <a
          href="https://www.tiktok.com/@marjiela"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.handle}
        >
          TikTok ↗
        </a>
        <a
          href="https://www.instagram.com/marjiela"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.handle}
        >
          Instagram ↗
        </a>
      </div>
    </div>

    <div className={styles.divider} />
  </header>
)

export default HomeHero
