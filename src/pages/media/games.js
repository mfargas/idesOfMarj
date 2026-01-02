import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import MediaKanban from '../../components/mediaKanban'
import { MEDIA_TYPES } from '../../lib/supabase'

const GamesPage = () => {
  return (
    <Layout>
      <Seo title="Games Log" />
      <MediaKanban 
        mediaType={MEDIA_TYPES.GAME} 
        title="Games Log"
      />
    </Layout>
  )
}

export default GamesPage

