import * as React from "react"
import ArtGallery from "../components/artProjects"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/artgallery.module.css"

const ArtPage = () => (
  <Layout>
    <Seo title="Art Projects" />

    {/* Hero Section */}
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center',
      marginBottom: '4rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Generative Art Gallery
        </h1>
        <p style={{
          fontSize: '1.3rem',
          lineHeight: '1.6',
          opacity: '0.9',
          marginBottom: '2rem'
        }}>
          Exploring the intersection of technology, creativity, and consciousness through digital art and generative processes.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            Digital Art
          </span>
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            Generative
          </span>
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            Experimental
          </span>
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <ArtGallery />

    {/* About Section */}
    <section style={{
      background: '#f8f9fa',
      padding: '4rem 2rem',
      marginTop: '4rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          color: '#060864',
          fontSize: '2.5rem',
          marginBottom: '1.5rem'
        }}>
          About This Collection
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#666',
          marginBottom: '2rem'
        }}>
          This gallery showcases a diverse range of digital art projects that explore the boundaries between human creativity and technological innovation. Each piece represents a unique approach to generative art, from algorithmic compositions to interactive experiences.
        </p>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#666'
        }}>
          The work spans multiple categories including digital art, abstract compositions, generative algorithms, portrait studies, conceptual narratives, and experimental forms. Each project invites viewers to contemplate the evolving relationship between art and technology.
        </p>
      </div>
    </section>
  </Layout>
)

export default ArtPage
