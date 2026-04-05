import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/postCard'
import { getAllPosts } from '../lib/blog'
import socialPosts from '../data/socialPosts'
import * as styles from '../styles/blog.module.css'
import * as cardStyles from '../styles/postCard.module.css'

const CATEGORIES = ['All', 'Interactive Media', 'Dev Log', 'Animation', 'Storytelling', 'Media Studies']

const Blog = ({ posts }) => {
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <Layout>
      <Seo title="Posts" description="Animation, storytelling, adaptation, lore — all of it." />

      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>IDES OF MARJ</h1>
          <p className={styles.pageDesc}>
            Interactive Media · Dev Log · Animation · Storytelling · Medium &amp; Message
          </p>
        </header>

        {/* Category filter */}
        <nav className={styles.filters} aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Post grid */}
        <div className={cardStyles.grid}>
          {filtered.map((post) => (
            <PostCard key={post.id ?? post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No posts in this category yet.</p>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = getAllPosts().map((post) => ({
    ...post,
    type: 'article',
  }))

  const social = socialPosts.filter((p) => p.published)

  const posts = [...articles, ...social].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return { props: { posts } }
}

export default Blog
