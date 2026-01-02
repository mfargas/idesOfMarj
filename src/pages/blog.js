import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/blog.module.css'
import { getAllPosts } from '../lib/blog'

const Blog = ({ posts }) => {
    return (
        <Layout>
            <Seo title="Blog" />
            <section className={styles.blogSection}>
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>IDES OF MARJ</h1>
                    <p className={styles.blogDescription}>
                        Thoughts on art, technology, and creative expression
                    </p>
                </div>

                <div className={styles.blogGrid}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <article className={styles.blogCard}>
                                <div className={styles.blogCardContent}>
                                    <div className={styles.blogCardMeta}>
                                        <span className={styles.blogCategory}>{post.category}</span>
                                        <span className={styles.blogDate}>{post.date}</span>
                                        {post.readTime && (
                                            <span className={styles.blogReadTime}>{post.readTime}</span>
                                        )}
                                    </div>
                                    <h2 className={styles.blogCardTitle}>{post.title}</h2>
                                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                                    <div className={styles.blogCardFooter}>
                                        <span className={styles.readMore}>Read More →</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

// This function gets called at build time for static export
export async function getStaticProps() {
    const posts = getAllPosts()

    return {
        props: {
            posts
        }
    }
}

export default Blog
