import React from 'react';
import { ReactLogo, NodeLogo, TsLogo, SassLogo } from '../TechLogos/TechLogos';
import './AboutMe.modules.scss';

const AboutMe = ({ aboutmeRef }) => {
  return (
    <section ref={aboutmeRef} className="aboutme">
      <div className="aboutme__container">
        <div className="aboutme__text">
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
      </div>
    </section>
  );
};

export default AboutMe;
