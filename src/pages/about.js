import * as React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => (
    <Layout>
        <Seo
            title="About"
            description="On media, machines, and what we make with both."
        />
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <h1 className={styles.aboutTitle}>MARJOREE</h1>
                <p className={styles.aboutSubtitle}>
                    On media, machines, and what we make with both.
                </p>
            </div>

            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <div className={styles.portraitPlaceholder}>
                        <span>Marjoree E. F.</span>
                    </div>
                </div>

                <div className={styles.aboutText}>
                    <p>
                        I grew up in 90&apos;s Los Angeles watching the format wars play out in
                        real time — VHS to DVD to the first streaming subscriptions. Nobody in
                        my house thought of that as media theory. It was just Saturday. But it
                        stuck with me: the same story felt different depending on how it arrived.
                    </p>
                    <p>
                        That question — does the container change what&apos;s inside? — is
                        basically the through-line of everything I make. I started in animation
                        because motion gives ideas a heartbeat. Then I found code, which does the
                        same thing but lets the audience talk back. Interactive media is where
                        those two impulses finally made sense together.
                    </p>
                    <p>
                        MARJIELA is where I think out loud about all of it: animation history,
                        the design decisions inside the apps I use, the dev work I&apos;m doing,
                        and whatever I watched last week and can&apos;t stop thinking about.
                    </p>

                    <div className={styles.skills}>
                        <h2>What I work with</h2>
                        <div className={styles.skillTags}>
                            <span className={styles.skillTag}>React / Next.js</span>
                            <span className={styles.skillTag}>TypeScript</span>
                            <span className={styles.skillTag}>CSS / Design Systems</span>
                            <span className={styles.skillTag}>Swift / SwiftUI</span>
                            <span className={styles.skillTag}>Interactive Animation</span>
                            <span className={styles.skillTag}>Creative Technology</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indie Apps */}
            <section className={styles.appsSection}>
                <h2 className={styles.sectionTitle}>Indie Apps</h2>
                <p className={styles.sectionDesc}>
                    I design and build iOS apps on my own — from the first sketch to the App Store.
                    Both are built around a single conviction: that good software should feel like it
                    was made by someone who actually uses it.
                </p>
                <div className={styles.appGrid}>
                    <div className={styles.appCard}>
                        <div className={styles.appMeta}>
                            <h3 className={styles.appName}>Ollin</h3>
                            <span className={styles.appBadge}>Available on App Store</span>
                        </div>
                        <p className={styles.appDesc}>
                            A habit app that adapts to you instead of nagging you. No guilt streaks,
                            no dark patterns — just systems that notice how you actually move through
                            your day and adjust accordingly.
                        </p>
                    </div>
                    <div className={styles.appCard}>
                        <div className={styles.appMeta}>
                            <h3 className={styles.appName}>Ollin Arcade</h3>
                            <span className={styles.appBadgeAlt}>In Development</span>
                        </div>
                        <p className={styles.appDesc}>
                            The playful side of the same idea — gamification done quietly.
                            Rewards that feel earned because they are, not because a progress
                            bar told you to keep going.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quiet footer links */}
            <div className={styles.aboutFooter}>
                <a
                    href="https://marjoree.com/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                >
                    Web projects at marjoree.com ↗
                </a>
                <Link href="/contact" className={styles.footerLink}>
                    Say Hello ↗
                </Link>
            </div>
        </div>
    </Layout>
)

export default AboutPage
