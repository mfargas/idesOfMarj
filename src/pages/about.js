import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <div className={styles.aboutContainer}>
            <header className={styles.aboutHeader}>
                <h1 className={styles.aboutTitle}>ABOUT</h1>
            </header>

            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <div className={styles.portraitPlaceholder}>
                        <span>Marjoree E. F.</span>
                    </div>
                </div>

                <div className={styles.aboutText}>
                    <p>
                        How often do you think about different mediums' impact on the delivery of their messages?
                        Marshall McLuhan penned his famous quote, <em>"The medium is the message,"</em> which
                        spoke to me and the nature of my understanding of media literacy a quarter into the 21st century.
                    </p>
                    <p>
                        My name is Marjoree, welcome to my digital garden. This is a space where I share
                        my projects and thoughts on the intersection of art, technology, and people.
                        The evolution of media has fascinated me for as long as I can remember. I was
                        born in 90's LA and grew up during the transition from VHS to DVD.
                    </p>

                    <div className={styles.skills}>
                        <h2>Areas of Focus</h2>
                        <div className={styles.skillTags}>
                            <span className={styles.skillTag}>Generative Art</span>
                            <span className={styles.skillTag}>Creative Coding</span>
                            <span className={styles.skillTag}>Digital Design</span>
                            <span className={styles.skillTag}>Web Development</span>
                            <span className={styles.skillTag}>Interactive Media</span>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h2>Get in Touch</h2>
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