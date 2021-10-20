import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Ides of Marge</h1>
    <p>Welcome to Margie's art site</p>
    <StaticImage
      src="../images/banner.png"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Marjoree E. F. Banner with Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Generative Art</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
