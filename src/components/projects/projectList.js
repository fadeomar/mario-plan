import React from 'react';
import ProjectSummary from './projectSummary';

const ProjectList = () => {
  return (
    <div className="list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
