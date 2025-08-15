import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/blog.module.css'

const Blog = () => {
    const blogPosts = [
        {
            title: "The Intersection of Art and Technology",
            date: "2024-01-15",
            excerpt: "Exploring how digital tools are reshaping creative expression and artistic boundaries.",
            category: "Art & Tech",
            readTime: "5 min read",
            slug: "art-technology-intersection"
        }
    ]

    return (
        <Layout>
            <section className={styles.blogSection}>
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>IDES OF MARJ</h1>
                    <p className={styles.blogDescription}>
                        Thoughts on art, technology, and creative expression
                    </p>
                </div>

                <div className={styles.blogGrid}>
                    {blogPosts.map((post, index) => (
                        <article key={index} className={styles.blogCard}>
                            <div className={styles.blogCardContent}>
                                <div className={styles.blogCardMeta}>
                                    <span className={styles.blogCategory}>{post.category}</span>
                                    <span className={styles.blogDate}>{post.date}</span>
                                    <span className={styles.blogReadTime}>{post.readTime}</span>
                                </div>
                                <h2 className={styles.blogCardTitle}>{post.title}</h2>
                                <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                                <div className={styles.blogCardFooter}>
                                    <span className={styles.readMore}>Read More →</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Blog
