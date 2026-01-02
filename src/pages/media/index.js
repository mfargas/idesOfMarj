import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import MediaCatalog from '../../components/mediaCatalog'

const MediaCatalogPage = () => {
  return (
    <Layout>
      <Seo title="Media Catalog" />
      <MediaCatalog />
    </Layout>
  )
}

export default MediaCatalogPage

