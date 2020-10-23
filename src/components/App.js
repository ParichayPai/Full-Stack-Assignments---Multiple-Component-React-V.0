import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "project-name",
      projectDescription: "project-description"
    };
  }
  render() {
    return (
      <>
        <ProjectName data-ns-test={this.state.projectName} />
        <ProjectDescription data-ns-test={this.state.projectDescription} />
      </>
    );
  }
}

export default App;
