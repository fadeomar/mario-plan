import React from 'react';
import Notifications from './notification';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="co1 s12 m6" />
          <div className="co1 s12 m5 offest-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
