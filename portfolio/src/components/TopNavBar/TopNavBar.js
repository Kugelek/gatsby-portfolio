import React, { useEffect, useState, useLayoutEffect } from 'react';
import Logo from '../../images/logo.png';
import './TopNavBar.modules.scss';
import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import Navigation from './Navigation';

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
        <Navigation type="desktop" scrollAction={scrollAction} />
      ) : (
        <>
          <button
            className={`burger-outer ${isMenuActive && 'burger-outer--opened'}`}
            onClick={() => setIsMenuActive((state) => !state)}
          >
            <div className={`burger ${isMenuActive && 'burger--opened'}`}></div>
          </button>
          {/* <Transition in={isMenuActive} timeout={500} appear unmountOnExit>
            {isMenuActive ? (
              <Navigation type="mobile" scrollAction={scrollAction} />
            ) : null}
          </Transition> */}
          <CSSTransition
            unmountOnExit
            in={isMenuActive}
            timeout={{ appear: 1, enter: 10, exit: 10 }}
            classNames="roll"
            appear
          >
            <Navigation
              type="mobile"
              closeMenu={() => setIsMenuActive((state) => false)}
              scrollAction={scrollAction}
            />
          </CSSTransition>
        </>
      )}
    </section>
  );
};

export default TopNavBar;
