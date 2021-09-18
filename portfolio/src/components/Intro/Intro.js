import React from 'react';
import './Intro.modules.scss';
import Arrow from '../../images/dblarrowdown.png';
import AnimatedComponent from '../AnimatedComponent/AnimatedComponent';

const Intro = ({ scrollAction, introRef }) => {
  return (
    <section ref={introRef} className={'intro'}>
      <div className="intro__headings">
        <h1 className="intro__headline intro__headline--hor"> developer</h1>
        <h1 className="intro__headline intro__headline--vert">frontend </h1>
        <h1 className="intro__headline--main">Jakub Pobłocki </h1>
        <h1 className="intro__headline intro__headline--horrev"> software</h1>
        <h1 className="intro__headline intro__headline--vertrev"> engineer</h1>
      </div>
      <AnimatedComponent
        containerClass="intro__scrolldown"
        delay="2000"
        duration="2000"
        offset="-100"
      >
        <img
          onClick={scrollAction.bind(this, 'ABOUTME')}
          src={Arrow}
          alt="scroll down"
          className="intro__scrolldown"
        />
      </AnimatedComponent>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="10" d="M0,320L60,320C120,320,240,320,360,272C480,224,600,128,720,90.7C840,53,960,75,1080,69.3C1200,64,1320,32,1380,16L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg> */}
    </section>
  );
};

export default Intro;
