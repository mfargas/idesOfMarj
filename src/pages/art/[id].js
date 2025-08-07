import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import * as styles from '../../styles/artgallery.module.css'
import { getProjectById } from '../../data/artProjects'

const ArtProjectPage = ({ project }) => {
    if (!project) {
        return (
            <Layout>
                <Seo title="Project Not Found" />
                <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <h1>Project Not Found</h1>
                    <p>The requested art project could not be found.</p>
                    <Link href="/art" style={{ color: '#060864', textDecoration: 'none' }}>
                        ← Back to Gallery
                    </Link>
                </div>
            </Layout>
        )
    }

    const getImageComponent = (imageName, altText) => {
        switch (imageName) {
            case 'fairies.PNG':
                return <Image src="/images/fairies.PNG" alt={altText} width={600} height={400} />
            case 'banner.png':
                return <Image src="/images/banner.png" alt={altText} width={600} height={400} />
            case 'gatsby-astronaut.png':
                return <Image src="/images/gatsby-astronaut.png" alt={altText} width={600} height={400} />
            case 'Margie-portrait.png':
                return <Image src="/images/Margie-portrait.png" alt={altText} width={600} height={400} />
            case 'andrea-portrait.jpg':
                return <Image src="/images/andrea-portrait.jpg" alt={altText} width={600} height={400} />
            case 'logo-favIcon.png':
                return <Image src="/images/logo-favIcon.png" alt={altText} width={600} height={400} />
            default:
                return <div style={{ width: '100%', height: '400px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Image</div>
        }
    }

    return (
        <Layout>
            <Seo title={project.title} />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <Link href="/art" style={{ color: '#060864', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
                    ← Back to Gallery
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        {getImageComponent(project.image, project.title)}
                    </div>
                    <div>
                        <h1 style={{ fontSize: '3rem', color: '#060864', marginBottom: '1rem' }}>{project.title}</h1>
                        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>{project.description}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <span style={{ background: '#060864', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                {project.category}
                            </span>
                            <span style={{ background: '#f0f0f0', color: '#060864', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                {project.year}
                            </span>
                            <span style={{ background: '#e8f4fd', color: '#060864', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                {project.medium}
                            </span>
                            {project.featured && (
                                <span style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Featured
                                </span>
                            )}
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ color: '#060864', marginBottom: '1rem' }}>Details</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <strong>Dimensions:</strong> {project.dimensions}
                                </div>
                                <div>
                                    <strong>Duration:</strong> {project.duration}
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ color: '#060864', marginBottom: '1rem' }}>Techniques</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.techniques.map((technique, index) => (
                                    <span key={index} style={{ background: '#f8f9fa', color: '#666', padding: '0.25rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', border: '1px solid #e9ecef' }}>
                                        {technique}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: '#060864', marginBottom: '1.5rem' }}>About This Work</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>{project.fullDescription}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid #e9ecef' }}>
                    <div>
                        <h3 style={{ color: '#060864', marginBottom: '1rem' }}>Tags</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tags.map((tag, index) => (
                                <span key={index} style={{ background: '#f8f9fa', color: '#666', padding: '0.25rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', border: '1px solid #e9ecef' }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Link href="/art" style={{ color: '#060864', textDecoration: 'none', fontWeight: '600' }}>
                        View All Projects →
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { artProjects } = require('../../data/artProjects.js')

    const paths = artProjects.map((project) => ({
        params: { id: project.id },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { getProjectById } = require('../../data/artProjects.js')
    const project = getProjectById(params.id)

    return {
        props: {
            project,
        },
    }
}

export default ArtProjectPage
