import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <h1 className={styles.aboutTitle}>ABOUT</h1>
                <p className={styles.aboutSubtitle}>
                    How often do you think about choice of media in its impact on the delivery of its message?
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
                        This is a space where I share my projects and thoughts on the intersection of art,
                        technology, and people. Born in 90's LA and grew up during the transition from VHS to DVD to streaming.
                    </p>

                    <div className={styles.skills}>
                        <h2>Areas of Focus</h2>
                        <div className={styles.skillTags}>
                            <span className={styles.skillTag}>iOS Development</span>
                            <span className={styles.skillTag}>Web Development</span>
                            <span className={styles.skillTag}>Digital Media</span>
                            <span className={styles.skillTag}>Interactive Media</span>
                        </div>
                    </div>

                    {/* <div className={styles.contact}>
                        <h2>Get in Touch</h2>
                        <p>
                            Interested in collaboration, commissions, or just want to chat about
                            art and technology? I'd love to hear from you.
                        </p>
                        <a href="mailto:hello@idesofmarge.com" className={styles.contactButton}>
                            Say Hello
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage 