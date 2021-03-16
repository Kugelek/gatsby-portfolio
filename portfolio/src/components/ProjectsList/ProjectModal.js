import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ProjectModal.modules.scss';
const ProjectModal = ({ isActive, toggle, data }) => {
  // const dynamicProjectClass =
  return (
    <>
      {/* <CSSTransition
        unmountOnExit
        in={isActive}
        timeout={{ appear: 1, enter: 10, exit: 1 }}
        classNames="slide"
        appear
      > */}
      {/* <div className={`project-modal ${dynamicProjectClass} `}> */}
      <div
        className={
          isActive ? 'project-modal  project-modal--active' : 'project-modal'
        }
      >
        <h5 className="project-modal__heading">About the project</h5>
        <p className="project-modal__text">{data.description1}</p>
        <p className="project-modal__text">{data.description2}</p>
        <h5 className="project-modal__heading">My achievements</h5>
        <ul className="project-modal__achievlist">
          {data.myAchievements.map((achiev) => (
            <li className="project-modal__achiev" key={achiev}>
              {achiev}
            </li>
          ))}
        </ul>
        <span className="exit-bg" onClick={(e) => toggle(false)}>
          <div className="exit"></div>
        </span>
        <article className="project-modal__content">fsagfdsadf</article>
      </div>
      {/* </CSSTransition> */}
    </>
  );
};

export default ProjectModal;
