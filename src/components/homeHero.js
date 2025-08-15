import * as React from 'react'
import Link from 'next/link'
import * as styles from '../styles/homeHero.module.css'

const HomeHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        MARJIELA
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Exploring the intersection of art, technology, and creative expression
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/art" className={styles.primaryButton}>
                            View Gallery
                        </Link>
                        <Link href="/blog" className={styles.secondaryButton}>
                            Read Blog
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.portraitPlaceholder}>
                        <span>DEVELOPMENT</span>
                        <small>ANIMATION</small>
                        <small>DIGITAL ART</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero