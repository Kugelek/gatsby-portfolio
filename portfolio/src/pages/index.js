import React, { useRef, useEffect } from 'react';

import Intro from '../components/Intro/Intro';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import Contact from '../components/Contact/Contact';
import FindCv from '../components/FindCv/FindCv';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from '../components/seo';

const IndexPage = () => {
  const introRef = useRef(null);
  const aboutmeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  //TODO: refac to HOC so other gatsby pages can use it aswell
  //or some context stuff idk
  const executeScroll = (destinationTag) => {
    switch (destinationTag) {
      case 'INTRO':
        introRef.current.scrollIntoView();
        break;
      case 'ABOUTME':
        aboutmeRef.current.scrollIntoView();
        break;
      case 'PROJECTS':
        projectsRef.current.scrollIntoView();
        break;
      case 'CONTACT':
        contactRef.current.scrollIntoView();
        break;
    }
  };

  let AOS;
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <SEO title="Home" />
      <TopNavBar scrollAction={executeScroll} />
      <Intro scrollAction={executeScroll} introRef={introRef} />
      <AboutMe aboutmeRef={aboutmeRef} />
      <ProjectsList projRef={projectsRef} />
      {/* <Contact />
      <FindCv /> */}
      <Footer />
    </>
  );
};

export default IndexPage;
