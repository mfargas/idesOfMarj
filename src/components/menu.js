import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import * as styles from '../styles/menu.module.css'

const Menu = ({ horizontal = false, onLinkClick }) => {
    const router = useRouter()
    const [activeDropdown, setActiveDropdown] = React.useState(null)
    const [featuredPost, setFeaturedPost] = React.useState(null)
    const timeoutRef = React.useRef(null)

    const isActive = (href) =>
        router.pathname === href || router.pathname.startsWith(href + '/')

    // Fetch featured post once on mount
    React.useEffect(() => {
        fetch('/api/featured-post')
            .then((r) => r.ok ? r.json() : null)
            .then((data) => { if (data) setFeaturedPost(data) })
            .catch(() => {})
    }, [])

    // Close on route change
    React.useEffect(() => { setActiveDropdown(null) }, [router.pathname])

    React.useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

    const handleMouseEnter = (key) => {
        if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null }
        setActiveDropdown(key)
    }

    const handleMouseLeave = (e) => {
        const related = e?.relatedTarget
        if (related?.closest?.('[data-megamenu]')) return
        if (related?.closest?.('[data-navitem]') && related.closest('[data-navitem]') !== e.currentTarget) {
            setActiveDropdown(null)
            return
        }
        timeoutRef.current = setTimeout(() => { setActiveDropdown(null); timeoutRef.current = null }, 350)
    }

    const navLinkClass = (href) =>
        [
            styles.navLink,
            horizontal ? styles.navLinkHorizontal : '',
            isActive(href) ? styles.navLinkActive : '',
        ].filter(Boolean).join(' ')

    const categories = [
        'Interactive Media',
        'Dev Log',
        'Animation',
        'Storytelling',
        'Media Studies',
    ]

    return (
        <menu>
            <ul className={`${styles.navMenu} ${horizontal ? styles.navMenuHorizontal : ''}`}>

                {/* BLOG with mega menu */}
                <li
                    className={styles.navItem}
                    data-navitem=""
                    onMouseEnter={() => handleMouseEnter('blog')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link className={navLinkClass('/blog')} href='/blog' onClick={onLinkClick}>
                        BLOG
                    </Link>

                    {activeDropdown === 'blog' && (
                        <div
                            className={styles.megaMenu}
                            data-megamenu=""
                            onMouseEnter={() => handleMouseEnter('blog')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.megaMenuInner}>
                                {/* Featured article — far left when present */}
                                {featuredPost && (
                                    <div className={styles.featuredCol}>
                                        <p className={styles.colLabel}>Featured</p>
                                        <Link
                                            href={`/blog/${featuredPost.slug}`}
                                            className={styles.featuredCard}
                                            onClick={onLinkClick}
                                        >
                                            <div className={styles.featuredCardImage}>
                                                {featuredPost.coverImage ? (
                                                    <Image
                                                        src={featuredPost.coverImage}
                                                        alt={featuredPost.title}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <div className={styles.featuredCardPlaceholder} />
                                                )}
                                            </div>
                                            {featuredPost.category && (
                                                <span className={styles.featuredCardCategory}>
                                                    {featuredPost.category}
                                                </span>
                                            )}
                                            <h4 className={styles.featuredCardTitle}>
                                                {featuredPost.title}
                                            </h4>
                                            {featuredPost.excerpt && (
                                                <p className={styles.featuredCardExcerpt}>
                                                    {featuredPost.excerpt}
                                                </p>
                                            )}
                                        </Link>
                                    </div>
                                )}

                                {/* Topics */}
                                <div className={styles.topicsCol}>
                                    <p className={styles.colLabel}>Topics</p>
                                    <ul className={styles.topicsList}>
                                        {categories.map((cat) => (
                                            <li key={cat}>
                                                <Link
                                                    href={`/blog?category=${encodeURIComponent(cat)}`}
                                                    className={styles.topicLink}
                                                    onClick={onLinkClick}
                                                >
                                                    {cat}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/blog" className={styles.viewAll} onClick={onLinkClick}>
                                        View All Posts →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </li>

                <li className={styles.navItem}>
                    <Link className={navLinkClass('/media/movies')} href='/media/movies' onClick={onLinkClick}>
                        FILM DIARY
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={navLinkClass('/about')} href='/about' onClick={onLinkClick}>
                        ABOUT
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={navLinkClass('/contact')} href='/contact' onClick={onLinkClick}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </menu>
    )
}

export default Menu
