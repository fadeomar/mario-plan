import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
