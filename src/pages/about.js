import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <div className={styles.aboutContainer}>
            <header className={styles.aboutHeader}>
                <h1 className={styles.aboutTitle}>About</h1>
                <p className={styles.aboutSubtitle}>
                    Creative technologist and digital artist
                </p>
            </header>

            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <div className={styles.portraitPlaceholder}>
                        <span>Marjoree E. F.</span>
                        <small>Creative Technologist</small>
                    </div>
                </div>

                <div className={styles.aboutText}>
                    <h2>Hello, I'm Marjoree</h2>
                    <p>
                        I'm a creative technologist exploring the intersection of art, technology,
                        and human expression. My work spans generative art, digital design, and
                        creative coding projects that challenge the boundaries between human and
                        machine creativity.
                    </p>

                    <p>
                        Through this platform, I share my artistic journey, technical explorations,
                        and thoughts on how digital tools are reshaping creative expression.
                        Each piece represents a moment of discovery, a question about perception,
                        or an experiment in algorithmic beauty.
                    </p>

                    <div className={styles.skills}>
                        <h3>Areas of Focus</h3>
                        <div className={styles.skillTags}>
                            <span className={styles.skillTag}>Generative Art</span>
                            <span className={styles.skillTag}>Creative Coding</span>
                            <span className={styles.skillTag}>Digital Design</span>
                            <span className={styles.skillTag}>Web Development</span>
                            <span className={styles.skillTag}>Interactive Media</span>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h3>Get in Touch</h3>
                        <p>
                            Interested in collaboration, commissions, or just want to chat about
                            art and technology? I'd love to hear from you.
                        </p>
                        <a href="mailto:hello@idesofmarge.com" className={styles.contactButton}>
                            Say Hello
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage 