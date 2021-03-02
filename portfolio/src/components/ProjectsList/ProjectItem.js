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
        thumbnailPosition={'left'}
        showBullets={true}
        additionalClass="gallery"
        showNav={false}
      />
      <div className="projectitem__details">
        <h1 className="projectitem__heading">{projectData.name}</h1>
        <p className="projectitem__description">
          {projectData.descriptionShort + '... '}
        </p>
        <TechStackPills techs={projectData.techStack} />
        <a href="#">
          <img
            className="projectitem__details-icon"
            src={DetailsIcon}
            alt="project details"
          />
        </a>
        <a href={projectData.github}>
          <img className="projectitem__github-icon" src={GhIcon} alt="github" />
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
