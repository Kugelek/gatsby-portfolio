import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ProjectItem.modules.scss';
import GhIcon from '../../images/github.png';
import DetailsIcon from '../../images/more.png';
import TechStackPills from '../TechStackPills/TechStackPills';

const ProjectItem = ({ projectData, photos }) => {
  return (
    <article className="projectitem">
      <ImageGallery
        items={photos}
        thumbnailPosition={'bottom'}
        showBullets={true}
        additionalClass="gallery"
        showNav={false}
      />
      <div className="projectitem__details">
        <h1 className="projectitem__heading">{projectData.name}</h1>
        <p
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          className="projectitem__description"
        >
          {projectData.descriptionShort + '... '}
        </p>
        <TechStackPills
          className="projectitem__pills"
          techs={projectData.techStack}
        />
        <div className="projectitem__iconbox">
          <a href="#">
            <img
              className="projectitem__icon"
              src={DetailsIcon}
              alt="project details"
            />
          </a>
          <a href={projectData.github}>
            <img className="projectitem__icon" src={GhIcon} alt="github" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
