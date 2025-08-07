import * as React from 'react'
import Link from 'next/link'
import * as styles from '../styles/homeHero.module.css'

const HomeHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        Welcome to ides of Marj
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
                        <span>Marjoree E. F.</span>
                        <small>Creative Technologist</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero