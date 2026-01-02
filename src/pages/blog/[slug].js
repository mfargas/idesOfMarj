import * as React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as styles from '../../styles/blogPost.module.css'
import { getPostBySlug, getAllPostSlugs } from '../../lib/blog'

// Custom components for ReactMarkdown
const MarkdownComponents = {
  img: ({ node, ...props }) => {
    // Handle all images (local and external)
    return (
      <div className={styles.imageWrapper}>
        <img 
          {...props} 
          className={styles.markdownImage} 
          alt={props.alt || ''}
          loading="lazy"
        />
      </div>
    )
  },
  a: ({ node, ...props }) => {
    // Check if it's an Instagram link
    if (props.href && props.href.includes('instagram.com')) {
      return (
        <a 
          {...props} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.instagramLink}
        >
          {props.children} 📷
        </a>
      )
    }
    return <a {...props} target="_blank" rel="noopener noreferrer" />
  }
}

const BlogPost = ({ post }) => {
  const router = useRouter()

  if (!post) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  // Check if post is published
  if (post.published !== true) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <h1>Post Not Available</h1>
          <p>This post is not yet published.</p>
        </div>
      </Layout>
    )
  }
  
  // Check if post date is in the future
  if (post.date) {
    const postDate = new Date(post.date)
    postDate.setHours(0, 0, 0, 0)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (postDate > today) {
      return (
        <Layout>
          <div className={styles.notFound}>
            <h1>Post Not Available</h1>
            <p>This post is scheduled for a future date.</p>
          </div>
        </Layout>
      )
    }
  }

  return (
    <Layout>
      <Seo title={post.title} />
      <article className={styles.blogPost}>
        <header className={styles.postHeader}>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>{post.category}</span>
            <span className={styles.postDate}>{post.date}</span>
            {post.readTime && (
              <span className={styles.postReadTime}>{post.readTime}</span>
            )}
          </div>
          <h1 className={styles.postTitle}>{post.title}</h1>
          {post.excerpt && (
            <p className={styles.postExcerpt}>{post.excerpt}</p>
          )}
        </header>

        <div className={styles.postContent}>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className={styles.postFooter}>
          <button 
            className={styles.backButton}
            onClick={() => router.push('/blog')}
          >
            ← Back to Blog
          </button>
        </footer>
      </article>
    </Layout>
  )
}

// This function gets called at build time for static export
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  
  return {
    props: {
      post
    }
  }
}

// This function gets called at build time to generate all static paths
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  
  return {
    paths,
    fallback: false // Show 404 for paths not generated at build time
  }
}

export default BlogPost

