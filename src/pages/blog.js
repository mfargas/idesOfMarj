import * as React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/blog.module.css"

const BlogPage = () => {
    const blogPosts = [
        {
            id: '1',
            title: 'The Intersection of Art and Technology',
            excerpt: 'Exploring how digital tools are reshaping creative expression and artistic boundaries.',
            date: '2024-01-15',
            readTime: '5 min read',
            category: 'Art & Tech'
        },
        {
            id: '2',
            title: 'Generative Art: Beyond the Algorithm',
            excerpt: 'How I approach creating art that balances randomness with intentional design.',
            date: '2024-01-10',
            readTime: '8 min read',
            category: 'Creative Process'
        },
        {
            id: '3',
            title: 'Building a Creative Portfolio',
            excerpt: 'Lessons learned from developing this website and showcasing creative work online.',
            date: '2024-01-05',
            readTime: '6 min read',
            category: 'Web Development'
        }
    ]

    return (
        <Layout>
            <Seo title="Blog" />
            <div className={styles.blogContainer}>
                <header className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>Blog</h1>
                    <p className={styles.blogDescription}>
                        Thoughts on art, technology, and creative expression
                    </p>
                </header>

                <div className={styles.postsGrid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.postCard}>
                            <div className={styles.postMeta}>
                                <span className={styles.postCategory}>{post.category}</span>
                                <span className={styles.postDate}>{post.date}</span>
                            </div>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postFooter}>
                                <span className={styles.readTime}>{post.readTime}</span>
                                <Link href={`/blog/${post.id}`} className={styles.readMore}>
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage 