import * as React from 'react'
import Link from 'next/link'
import HomeHero from '../components/homeHero'
import PostCard from '../components/postCard'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { getAllPosts } from '../lib/blog'
import socialPosts from '../data/socialPosts'
import * as styles from '../styles/postCard.module.css'
import * as homeStyles from '../styles/home.module.css'

const Home = ({ recentPosts }) => (
  <Layout>
    <Seo title="MARJIELA" description="Frontend developer, creative technologist, and indie app developer writing about interactive media, dev work, and the moving image." />
    <HomeHero />

    <section className={homeStyles.feed}>
      <div className={homeStyles.feedHeader}>
        <span className={homeStyles.feedLabel}>Latest</span>
        <Link href="/blog" className={homeStyles.feedLink}>All posts →</Link>
      </div>

      <div className={styles.grid}>
        {recentPosts.map((post) => (
          <PostCard key={post.id ?? post.slug} post={post} />
        ))}
      </div>
    </section>
  </Layout>
)

export async function getStaticProps() {
  const articles = getAllPosts().map((post) => ({
    ...post,
    type: 'article',
  }))

  const social = socialPosts.filter((p) => p.published)

  const recentPosts = [...articles, ...social]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9)

  return { props: { recentPosts } }
}

export default Home
