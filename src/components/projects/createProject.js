import React, { Component } from 'react';
import { connect } from 'react-redux';
import createProject from '../../store/actions/projectAction';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };

  handleSubmit = e => {
    const { createProject } = this.props;
    e.preventDefault();
    createProject(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-filed">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispartchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispartchToProps)(CreateProject);
