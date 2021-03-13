import React from 'react';
import './TechStackPills.modules.scss';
const TechStackPills = ({ techs }) => {
  return (
    <ul className="pills__list">
      {techs.map((techItem) => (
        <li
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-quad"
          data-aos-duration="700"
          className="pills__item"
        >
          {techItem}
        </li>
      ))}
    </ul>
  );
};

export default TechStackPills;
