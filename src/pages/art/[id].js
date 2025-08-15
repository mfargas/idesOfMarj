import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getProjectById } from '../../data/artProjects'
import * as styles from '../../styles/artgallery.module.css'

const ArtProject = () => {
    const router = useRouter()
    const { id } = router.query

    const project = getProjectById(id)

    if (!project) {
        return (
            <Layout>
                <div className={styles.projectNotFound}>
                    <h1>Project Not Found</h1>
                    <p>The project you're looking for doesn't exist.</p>
                    <Link href="/art" className={styles.backLink}>
                        ← Back to Gallery
                    </Link>
                </div>
            </Layout>
        )
    }

    const getImageComponent = (imageName, altText) => {
        switch (imageName) {
            case 'fairies.PNG':
                return <Image src="/images/fairies.PNG" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            case 'banner.png':
                return <Image src="/images/banner.png" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            case 'gatsby-astronaut.png':
                return <Image src="/images/gatsby-astronaut.png" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            case 'Margie-portrait.png':
                return <Image src="/images/Margie-portrait.png" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            case 'andrea-portrait.jpg':
                return <Image src="/images/andrea-portrait.jpg" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            case 'logo-favIcon.png':
                return <Image src="/images/logo-favIcon.png" alt={altText} width={600} height={400} className={styles.projectDetailImage} />
            default:
                return <div className={styles.imagePlaceholder}><span>Image</span></div>
        }
    }

    return (
        <Layout>
            <div className={styles.projectDetail}>
                <div className={styles.projectDetailHeader}>
                    <Link href="/art" className={styles.backLink}>
                        ← Back to Gallery
                    </Link>
                    <div className={styles.projectDetailMeta}>
                        <span className={styles.projectNumber}>{project.id}</span>
                        {project.featured && (
                            <span className={styles.featuredBadge}>Featured</span>
                        )}
                    </div>
                </div>

                <div className={styles.projectDetailContent}>
                    <div className={styles.projectDetailImageContainer}>
                        {getImageComponent(project.image, project.title)}
                    </div>

                    <div className={styles.projectDetailInfo}>
                        <h1 className={styles.projectDetailTitle}>{project.title}</h1>
                        <p className={styles.projectDetailDescription}>{project.description}</p>

                        <div className={styles.projectDetailMeta}>
                            <div className={styles.metaItem}>
                                <strong>Category:</strong> {project.category}
                            </div>
                            <div className={styles.metaItem}>
                                <strong>Year:</strong> {project.year}
                            </div>
                            <div className={styles.metaItem}>
                                <strong>Medium:</strong> {project.medium}
                            </div>
                            <div className={styles.metaItem}>
                                <strong>Dimensions:</strong> {project.dimensions}
                            </div>
                            <div className={styles.metaItem}>
                                <strong>Duration:</strong> {project.duration}
                            </div>
                        </div>

                        <div className={styles.projectDetailTags}>
                            {project.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>

                        <div className={styles.projectDetailTechniques}>
                            <h3>Techniques Used</h3>
                            <ul>
                                {project.techniques.map((technique, index) => (
                                    <li key={index}>{technique}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.projectDetailFullDescription}>
                            <h3>About This Project</h3>
                            <p>{project.fullDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ArtProject
