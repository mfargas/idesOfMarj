import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/banner.png"
      width={1000}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Marjoree E. F. Banner with Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <HomeHero />
  </Layout>
)

export default IndexPage
