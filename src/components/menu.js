import * as React from 'react'
import Link from 'next/link'

import * as styles from '../styles/menu.module.css'

const Menu = () => {
    const [activeDropdown, setActiveDropdown] = React.useState(null)
    const [blogPosts, setBlogPosts] = React.useState([])

    React.useEffect(() => {
        // Fetch blog posts from static JSON file (generated at build time)
        // For now, we'll use known categories
    }, [])

    const timeoutRef = React.useRef(null)

    const handleMouseEnter = (dropdown) => {
        // Clear any pending close
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setActiveDropdown(dropdown)
    }

    const handleMouseLeave = (dropdown, e) => {
        // Longer delay to give users more time to move to the menu (especially for new/slower users)
        // Check if we're moving to the menu element
        const relatedTarget = e?.relatedTarget
        if (relatedTarget) {
            // Check if moving to menu or any element within menu
            const menuElement = relatedTarget.closest && relatedTarget.closest(`.${styles.megaMenu}`)
            if (menuElement) {
                // Moving to menu, don't close
                return
            }
            // Check if moving to another nav item
            const navItem = relatedTarget.closest && relatedTarget.closest(`.${styles.navItem}`)
            if (navItem && navItem !== e.currentTarget) {
                // Moving to different nav item, close current menu
                setActiveDropdown(null)
                return
            }
        }

        // Delay closing to allow time to move to menu
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null)
            timeoutRef.current = null
        }, 400) // Increased to 400ms for slower users
    }

    const handleMenuMouseEnter = (dropdown) => {
        // Clear timeout when entering menu
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setActiveDropdown(dropdown)
    }

    React.useEffect(() => {
        // Cleanup timeout on unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    // Known blog categories
    const categories = [
        'Media Studies',
        'Interactive Media',
        'Ollin Highlights'
    ]

    // Get featured posts (most recent published posts)
    const featuredPosts = blogPosts.slice(0, 2)

    return (
        <menu>
            <ul className={styles.navMenu}>
                <li
                    className={styles.navItem}
                    onMouseEnter={() => handleMouseEnter('blog')}
                    onMouseLeave={(e) => handleMouseLeave('blog', e)}
                >
                    <Link className={styles.navLink} href='/blog'> BLOG </Link>
                    {activeDropdown === 'blog' && (
                        <div
                            className={styles.megaMenu}
                            onMouseEnter={() => handleMenuMouseEnter('blog')}
                            onMouseLeave={(e) => handleMouseLeave('blog', e)}
                        >
                            <div className={styles.megaMenuContent}>
                                <div className={styles.megaMenuSection}>
                                    <h3 className={styles.megaMenuTitle}>Topics</h3>
                                    <ul className={styles.megaMenuList}>
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={`/blog?category=${encodeURIComponent(category)}`}
                                                    className={styles.megaMenuLink}
                                                >
                                                    {category}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link
                                                href="/blog"
                                                className={styles.megaMenuLink}
                                            >
                                                View All Posts
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {featuredPosts.length > 0 && (
                                    <div className={styles.megaMenuSection}>
                                        <h3 className={styles.megaMenuTitle}>Featured</h3>
                                        <div className={styles.featuredPosts}>
                                            {featuredPosts.map((post) => (
                                                <Link
                                                    key={post.slug}
                                                    href={`/blog/${post.slug}`}
                                                    className={styles.featuredPost}
                                                >
                                                    <div className={styles.featuredPostImage}>
                                                        <div className={styles.imagePlaceholder}>
                                                            {post.title.charAt(0)}
                                                        </div>
                                                    </div>
                                                    <div className={styles.featuredPostContent}>
                                                        <span className={styles.featuredPostCategory}>
                                                            {post.category}
                                                        </span>
                                                        <h4 className={styles.featuredPostTitle}>
                                                            {post.title}
                                                        </h4>
                                                        {post.excerpt && (
                                                            <p className={styles.featuredPostExcerpt}>
                                                                {post.excerpt.substring(0, 80)}...
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </li>
                <li
                    className={styles.navItem}
                    onMouseEnter={() => handleMouseEnter('media')}
                    onMouseLeave={(e) => handleMouseLeave('media', e)}
                >
                    <Link className={styles.navLink} href='/media'> MEDIA LOG </Link>
                    {activeDropdown === 'media' && (
                        <div
                            className={styles.megaMenu}
                            onMouseEnter={() => handleMenuMouseEnter('media')}
                            onMouseLeave={(e) => handleMouseLeave('media', e)}
                        >
                            <div className={styles.megaMenuContent}>
                                <div className={styles.megaMenuSection}>
                                    <h3 className={styles.megaMenuTitle}>Browse by Type</h3>
                                    <ul className={styles.megaMenuList}>
                                        <li>
                                            <Link
                                                href="/media/books"
                                                className={styles.megaMenuLink}
                                            >
                                                Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/media/tv-shows"
                                                className={styles.megaMenuLink}
                                            >
                                                TV Shows
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/media/games"
                                                className={styles.megaMenuLink}
                                            >
                                                Games
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/media/movies"
                                                className={styles.megaMenuLink}
                                            >
                                                Movies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/media"
                                                className={styles.megaMenuLink}
                                            >
                                                View All Media
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href='/about'> ABOUT </Link>
                </li>
            </ul>
        </menu>
    )
}

export default Menu
