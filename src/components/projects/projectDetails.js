import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = props => {
  const { id } = props.match.params;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title</span>
          <p>asdasdasdasdasdasd</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by fadi </div>
          <div>2nd september, 2am</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, prevProps) => {
  const {id} = prevProps.match.params;
  const {projects} = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
