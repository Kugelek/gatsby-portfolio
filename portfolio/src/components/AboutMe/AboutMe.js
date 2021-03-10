import React from 'react';
import { ReactLogo, NodeLogo, TsLogo, SassLogo } from '../TechLogos/TechLogos';
import './AboutMe.modules.scss';
import MyPhoto from '../../images/myphoto.jpg';

const AboutMe = ({ aboutmeRef }) => {
  return (
    <section ref={aboutmeRef} className="aboutme">
      <div className="aboutme__container--single">
        <h3 className="aboutme__heading">About me</h3>
        <div className="aboutme__info">
          <div className="aboutme__photo">
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
              Hey, I'm Kuba!
            </h4>
            <p
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              I'm a frontend dev and I love creating web apps.
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
            <span className="cta">Hire me &#x2192;</span>
          </div>
        </div>
      </div>
      <div className="aboutme__container">
        <h3 className="aboutme__heading">Main skills</h3>
        <div className="aboutme__skills">
          <div className="skill">
            <ReactLogo />
            <h5 className="skill__heading">React.js</h5>
            <p className="skill__description">
              Developing frontend layer of web applications
            </p>
          </div>

          <div className="skill">
            <TsLogo />
            <h5 className="skill__heading">JS ES6+ / Typescript </h5>
            <p className="skill__description">
              Familiarity with modern JavaScript syntax in practise.
            </p>
            <p className="skill__description">
              Skills in working with strongly typed programming languages.
            </p>
          </div>
          <div className="skill">
            <SassLogo />
            <h5 className="skill__heading">CSS3 / SCSS</h5>
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
