import React from 'react';

import './Navigation.modules.scss';

const Navigation = ({ type, scrollAction, closeMenu }) => {
  const mobileBg = type === 'mobile' ? 'bg' : '';
  const shouldCloseMenu = type === 'mobile' ? true : false;

  const navClasses = type === 'mobile' ? 'nav-mobile' : 'nav';
  const navItemClasses = type === 'mobile' ? 'nav__item-mobile' : 'nav__item';
  return (
    <>
      <div className={mobileBg}>
        <nav className={navClasses}>
          <span
            className={navItemClasses}
            onClick={(e) => {
              shouldCloseMenu && closeMenu();
              scrollAction('PROJECTS');
            }}
          >
            Projects
          </span>
          <span
            className={navItemClasses}
            onClick={(e) => {
              shouldCloseMenu && closeMenu();
              scrollAction('CONTACT');
            }}
            // onClick={scrollAction.bind(this, 'CONTACT')}
          >
            Contact me
          </span>
          <span
            className={navItemClasses}
            onClick={(e) => {
              shouldCloseMenu && closeMenu();
              scrollAction('RESUME');
            }}
          >
            Resume
          </span>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
