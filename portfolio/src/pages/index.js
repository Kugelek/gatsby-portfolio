import React from "react"
import { Link } from "gatsby"

import Intro from "../components/Intro/Intro"
import SEO from "../components/seo"

const IndexPage = () => (
 <>
    <SEO title="Home" />
    <Intro/>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
