import React from "react"

import Intro from "../components/Intro/Intro";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import AboutMe from "../components/AboutMe/AboutMe";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import SEO from "../components/seo"

const IndexPage = () => (
 <>
    <SEO title="Home" />
    <TopNavBar/>
    <Intro/>
    <AboutMe/>
    <ProjectsList/>
  </>
)

export default IndexPage
