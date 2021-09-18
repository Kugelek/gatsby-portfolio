import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './ProjectItem.modules.scss';
import GhIcon from '../../images/github.png';
import DetailsIcon from '../../images/more.png';
import TechStackPills from '../TechStackPills/TechStackPills';
import ProjectModal from './ProjectModal';

const ProjectItem = ({ projectData, photos }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <article className="projectitem">
        <ProjectModal
          isActive={isModalActive}
          toggle={setIsModalActive}
          data={projectData}
        />

        <ImageGallery
          items={photos}
          thumbnailPosition={'bottom'}
          showBullets={true}
          additionalClass="gallery"
          showNav={false}
          lazyLoad={true}
          showPlayButton={false}
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          className="projectitem__details"
        >
          <h1 className="projectitem__heading">{projectData.name}</h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="900"
            className="projectitem__description"
          >
            {projectData.descriptionShort + '... '}
          </p>
          <TechStackPills
            className="projectitem__pills"
            techs={projectData.techStack}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400"
          className="projectitem__iconbox"
        >
          <span onClick={(e) => setIsModalActive((state) => !state)}>
            <img
              className="projectitem__icon"
              src={DetailsIcon}
              alt="project details"
            />
          </span>
          {projectData.github.length ? (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectitem__icon" src={GhIcon} alt="github" />
            </a>
          ) : null}
        </div>
      </article>
    </>
  );
};

export default ProjectItem;
