import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './projectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="list section">
      {projects &&
        projects.map(project => {
          console.log('idddd', project.id);

          return (
            <Link to={`/project/${project.id}`}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
