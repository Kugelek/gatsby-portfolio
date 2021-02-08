import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import './TopNavBar.modules.scss';

const handleScrollingEffects = (event) => {
  console.log(window.scrollY);
};

const TopNavBar = ({ scrollAction }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScrollingEffects);

    return () => window.removeEventListener('scroll', handleScrollingEffects);
  }, []);

  return (
    <section className="topbar">
      <div className="topbar__logobox">
        <img
          onClick={scrollAction.bind(this, 'INTRO')}
          className="topbar__logo"
          src={Logo}
          alt="poblocki dev logo"
        />
      </div>
      <nav className="topbar__nav">
        <span
          className="topbar__nav-item"
          onClick={scrollAction.bind(this, 'PROJECTS')}
        >
          Projects
        </span>
        <span
          className="topbar__nav-item"
          onClick={scrollAction.bind(this, 'CONTACT')}
        >
          Contact me
        </span>
      </nav>
    </section>
  );
};

export default TopNavBar;
