import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import MediaKanban from '../../components/mediaKanban'
import { MEDIA_TYPES } from '../../lib/supabase'

const MoviesPage = () => {
  return (
    <Layout>
      <Seo title="Movies Log" />
      <MediaKanban 
        mediaType={MEDIA_TYPES.MOVIE} 
        title="Movies Log"
      />
    </Layout>
  )
}

export default MoviesPage

