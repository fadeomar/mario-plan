import React, { Component } from 'react';
import Notifications from './notification';
import ProjectList from '../projects/projectList';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offest-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
