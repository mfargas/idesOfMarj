import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import MediaKanban from '../../components/mediaKanban'
import { MEDIA_TYPES } from '../../lib/supabase'

const BooksPage = () => {
  return (
    <Layout>
      <Seo title="Books Log" />
      <MediaKanban 
        mediaType={MEDIA_TYPES.BOOK} 
        title="Books Log"
      />
    </Layout>
  )
}

export default BooksPage

