import React from 'react';
import ProjectSummary from './projectSummary';

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="list section">
      {projects && projects.map(project => <ProjectSummary project={project} key={project.id} />)}
    </div>
  );
};

export default ProjectList;
