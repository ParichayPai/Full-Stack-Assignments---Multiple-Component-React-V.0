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
        <ProjectName data-ns-test="project-name" />
        <ProjectDescription data-ns-test="project-description" />
      </>
    );
  }
}

export default App;
