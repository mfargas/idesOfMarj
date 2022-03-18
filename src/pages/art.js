import * as React from "react"
import ArtGallery from "../components/artProjects"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ArtPage = () => (
  <Layout>
    <Seo title="Art Projects" />
    <h1>Generative Art</h1>
    <p>Welcome to my art page</p>
    <ArtGallery />
  </Layout>
)

export default ArtPage
