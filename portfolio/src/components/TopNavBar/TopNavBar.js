import React, { useEffect, useState, useLayoutEffect } from 'react';
import Logo from '../../images/logo.png';
import './TopNavBar.modules.scss';

const handleScrollingEffects = (event) => {
  console.log(window.scrollY);
};

const useDynamicWindowDimensions = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const TopNavBar = ({ scrollAction }) => {
  const [windowWidth, windowwHeight] = useDynamicWindowDimensions();

  const [isMenuActive, setIsMenuActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScrollingEffects);

    return () => window.removeEventListener('scroll', handleScrollingEffects);
  }, []);

  const navigation = (
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
      <span
        className="topbar__nav-item"
        onClick={scrollAction.bind(this, 'RESUME')}
      >
        Resume
      </span>
    </nav>
  );

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
      {windowWidth > 800 ? (
        <>{navigation}</>
      ) : (
        <div
          className="burger"
          onClick={() => setIsMenuActive((state) => !state)}
        ></div>
      )}
    </section>
  );
};

export default TopNavBar;
