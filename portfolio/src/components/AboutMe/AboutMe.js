import React from 'react';
import { ReactLogo, NodeLogo, TsLogo, SassLogo } from '../TechLogos/TechLogos';
import './AboutMe.modules.scss';
import MyPhoto from '../../images/myphoto.jpg';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';

const AboutMe = ({ aboutmeRef }) => {
  return (
    <section ref={aboutmeRef} className="aboutme">
      <div className="aboutme__container--single">
        <h3
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="aboutme__heading"
        >
          About me
        </h3>
        <div className="aboutme__info">
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
            className="aboutme__photo"
          >
            <img className="aboutme__img" src={MyPhoto} alt="me" />
          </div>
          <div className="aboutme__description">
            <h4
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              className="aboutme__subh"
            >
              Hi, I'm Kuba!
            </h4>
            <p
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              I'm a front-end dev and I love creating web apps.
            </p>
            <p
              data-aos="fade-zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              Ready for new challenges. Open to offers in Gdańsk and Gdynia. Or
              remote ones... :)
            </p>
            <span
              data-aos="fade-zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2200"
              className="cta"
            >
              <a href="mailto:poblocki.jakub@gmail.com">Hire me &#x2192;</a>
            </span>
            <div className="iconbox">
              <a
                href="https://www.linkedin.com/in/jakub-pob%C5%82ocki-510a081a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconbox__icon"
                  src={Linkedin}
                  alt="linkedin icon"
                />
              </a>
              <a href="https://github.com/Kugelek" target="_blank" rel="noopener noreferrer">
                <img className="iconbox__icon" src={Github} alt="github icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme__container">
        <h3
          data-aos="fade-zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="aboutme__heading skills-heading"
        >
          Main skills
        </h3>
        <div
          className="aboutme__skills"
          data-aos="fade-zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <div className="skill">
            <ReactLogo />
            <h5 className="skill__heading">React.js</h5>
            <p className="skill__description">
              Developing frontend layer of web applications. Skillfully using
              hooks and functional paradigm approach.
            </p>
          </div>

          <div className="skill">
            <TsLogo />
            <h5 className="skill__heading">JS ES6+ & TypeScript </h5>
            <p className="skill__description">
              Familiarity with modern JavaScript syntax in practise.
            </p>
            <p className="skill__description">
              Skills in working with strongly typed programming languages.
            </p>
          </div>
          <div className="skill">
            <SassLogo />
            <h5 className="skill__heading">CSS3 & SCSS</h5>
            <p className="skill__description">
              Styling websites & webapps in most up-to-date ways.{' '}
            </p>
            <p className="skill__description">
              Proficiency in BEM methodology and applying modern styles.
            </p>
          </div>
          <div className="skill">
            <NodeLogo />
            <h5 className="skill__heading">Node.js</h5>
            <p className="skill__description">
              Building RESTful APIs with Node.js/Express.js.
            </p>
            <p className="skill__description">
              Handling WebSockets connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
