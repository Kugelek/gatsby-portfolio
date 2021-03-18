import React from 'react';

import './ProjectsList.modules.scss';
import { Projects } from '../../data/Projects';
import ProjectItem from './ProjectItem';
const ProjectsList = ({ projRef }) => {
  return (
    <main ref={projRef} className="projects">
      <h1
        className="projects__title"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        Let's see some projects I've been developing!
      </h1>
      <ul className="projects__list">
        {Projects.map((projData) => (
          <ProjectItem
            key={projData.name}
            projectData={projData}
            photos={projData.photos}
          />
        ))}
      </ul>

      <h1
        className="projects__title"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        More to be added soon...
      </h1>
    </main>
  );
};

export default ProjectsList;
