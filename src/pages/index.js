import * as React from "react"
import Image from "next/image"

import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Image
      src="/images/banner.png"
      width={1000}
      height={400}
      alt="Marjoree E. F. Banner with Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <HomeHero />
  </Layout>
)

export default IndexPage
