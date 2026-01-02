import * as React from 'react'
import HomeHero from '../components/homeHero'
import Timeline from '../components/timeline'
import Layout from '../components/layout'

const Home = () => {
    return (
        <Layout>
            <HomeHero />
            <Timeline />
        </Layout>
    )
}

export default Home
