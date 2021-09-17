import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import './TopNavBar.modules.scss';
import { CSSTransition } from 'react-transition-group';
import Navigation from './Navigation';
import { useDynamicWindowDimensions } from '../../hooks/useDynamicWindowDimensions';

const TopNavBar = ({ scrollAction }) => {
  const [windowWidth, windowwHeight] = useDynamicWindowDimensions();

  const [isMenuActive, setIsMenuActive] = useState(false);

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
