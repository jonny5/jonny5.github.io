import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Kaplan" keywords={[`jon`, `kaplan`, `meditation`]} />
    <h1>Welcome friend</h1>
  </Layout>
)

export default IndexPage
