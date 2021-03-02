import React from 'react';
import './TechStackPills.modules.scss';
const TechStackPills = ({ techs }) => {
  return (
    <ul className="pills__list">
      {techs.map((techItem) => (
        <li className="pills__item">{techItem}</li>
      ))}
    </ul>
  );
};

export default TechStackPills;
