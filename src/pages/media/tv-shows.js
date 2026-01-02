import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import MediaKanban from '../../components/mediaKanban'
import { MEDIA_TYPES } from '../../lib/supabase'

const TVShowsPage = () => {
  return (
    <Layout>
      <Seo title="TV Shows Log" />
      <MediaKanban 
        mediaType={MEDIA_TYPES.TV_SHOW} 
        title="TV Shows Log"
      />
    </Layout>
  )
}

export default TVShowsPage

