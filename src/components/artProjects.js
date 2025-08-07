import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from '../styles/artgallery.module.css'
import { artProjects, categories, getFeaturedProjects } from '../data/artProjects'

const ArtGallery = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All')
    const [searchQuery, setSearchQuery] = React.useState('')
    const featuredProjects = getFeaturedProjects()

    const filteredProjects = React.useMemo(() => {
        let projects = selectedCategory === 'All'
            ? artProjects
            : artProjects.filter(project => project.category === selectedCategory)

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            projects = projects.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tags.some(tag => tag.toLowerCase().includes(query)) ||
                project.category.toLowerCase().includes(query) ||
                project.medium.toLowerCase().includes(query)
            )
        }

        return projects
    }, [selectedCategory, searchQuery])

    const getImageComponent = (imageName, altText) => {
        switch (imageName) {
            case 'fairies.PNG':
                return <Image src="/images/fairies.PNG" alt={altText} width={400} height={250} className={styles.projectImage} />
            case 'banner.png':
                return <Image src="/images/banner.png" alt={altText} width={400} height={250} className={styles.projectImage} />
            case 'gatsby-astronaut.png':
                return <Image src="/images/gatsby-astronaut.png" alt={altText} width={400} height={250} className={styles.projectImage} />
            case 'Margie-portrait.png':
                return <Image src="/images/Margie-portrait.png" alt={altText} width={400} height={250} className={styles.projectImage} />
            case 'andrea-portrait.jpg':
                return <Image src="/images/andrea-portrait.jpg" alt={altText} width={400} height={250} className={styles.projectImage} />
            case 'logo-favIcon.png':
                return <Image src="/images/logo-favIcon.png" alt={altText} width={400} height={250} className={styles.projectImage} />
            default:
                return <div className={styles.imagePlaceholder}><span>Image</span></div>
        }
    }

    return (
        <section className={styles.gallerySection}>
            {/* Featured Projects Section */}
            {selectedCategory === 'All' && !searchQuery && (
                <div style={{ marginBottom: '4rem' }}>
                    <div className={styles.galleryHeader}>
                        <h2 className={styles.galleryTitle}>Featured Projects</h2>
                        <p className={styles.galleryDescription}>
                            Highlighted works showcasing the intersection of art and technology
                        </p>
                    </div>
                    <div className={styles.container}>
                        {featuredProjects.map((project) => (
                            <div key={project.id} className={`${styles.galleryItem} ${styles.featuredItem}`}>
                                <div className={styles.itemImage}>
                                    {getImageComponent(project.image, project.title)}
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemNum}>
                                        {project.id}
                                    </div>
                                    <div className={styles.featuredBadge}>
                                        Featured
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3 className={styles.itemTitle}>{project.title}</h3>
                                        <p className={styles.itemDescription}>{project.description}</p>
                                        <div className={styles.itemMeta}>
                                            <span className={styles.itemCategory}>{project.category}</span>
                                            <span className={styles.itemYear}>{project.year}</span>
                                            <span className={styles.itemMedium}>{project.medium}</span>
                                        </div>
                                        <div className={styles.itemTags}>
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link href={`/art/${project.id}`} className={styles.itemLink}>
                                        View Project →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.galleryHeader}>
                <h2 className={styles.galleryTitle}>
                    {searchQuery
                        ? `Search Results for "${searchQuery}"`
                        : selectedCategory === 'All'
                            ? 'All Projects'
                            : `${selectedCategory} Projects`
                    }
                </h2>
                <p className={styles.galleryDescription}>
                    {searchQuery
                        ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`
                        : selectedCategory === 'All'
                            ? 'A collection of generative art and creative explorations spanning digital, abstract, and conceptual realms'
                            : `Exploring ${selectedCategory.toLowerCase()} through innovative digital techniques and creative processes`
                    }
                </p>

                {/* Search Bar */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search projects by title, description, tags, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className={styles.clearSearch}
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Category Filter */}
                <div className={styles.categoryFilter}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.container}>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id} className={styles.galleryItem}>
                            <div className={styles.itemImage}>
                                {getImageComponent(project.image, project.title)}
                            </div>
                            <div className={styles.itemContent}>
                                <div className={styles.itemNum}>
                                    {project.id}
                                </div>
                                {project.featured && (
                                    <div className={styles.featuredBadge}>
                                        Featured
                                    </div>
                                )}
                                <div className={styles.itemInfo}>
                                    <h3 className={styles.itemTitle}>{project.title}</h3>
                                    <p className={styles.itemDescription}>{project.description}</p>
                                    <div className={styles.itemMeta}>
                                        <span className={styles.itemCategory}>{project.category}</span>
                                        <span className={styles.itemYear}>{project.year}</span>
                                        <span className={styles.itemMedium}>{project.medium}</span>
                                    </div>
                                    <div className={styles.itemTags}>
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <Link href={`/art/${project.id}`} className={styles.itemLink}>
                                    View Project →
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <h3>No projects found</h3>
                        <p>Try adjusting your search terms or category filter.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedCategory('All')
                            }}
                            className={styles.resetButton}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ArtGallery
