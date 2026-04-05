import * as React from 'react'
import Link from 'next/link'
import * as styles from '../styles/postCard.module.css'

const PLATFORM_LABELS = {
  tiktok: 'TikTok',
  instagram: 'IG',
  youtube: 'YouTube',
}

const PostCard = ({ post }) => {
  const videoRef = React.useRef(null)
  const isVideo = post.type === 'video'
  const hasPreview = Boolean(post.previewVideo)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const cardInner = (
    <article
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.media}>
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className={`${styles.coverImage} ${hasPreview ? styles.fadeOnHover : ''}`}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}

        {hasPreview && (
          <video
            ref={videoRef}
            src={post.previewVideo}
            className={styles.previewVideo}
            muted
            loop
            playsInline
            preload="none"
          />
        )}

        {isVideo && (
          <span className={styles.platformBadge}>
            {PLATFORM_LABELS[post.platform] ?? post.platform}
          </span>
        )}

        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.info}>
        <span className={styles.category}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <span className={styles.meta}>
          {post.date}
          {post.readTime ? ` · ${post.readTime}` : ''}
        </span>
      </div>
    </article>
  )

  if (isVideo) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Watch: ${post.title} on ${PLATFORM_LABELS[post.platform] ?? post.platform}`}
      >
        {cardInner}
      </a>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className={styles.link}>
      {cardInner}
    </Link>
  )
}

export default PostCard
