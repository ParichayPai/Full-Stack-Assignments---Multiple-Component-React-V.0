import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

class App extends Component {
  render() {
    return (
      <>
        <ProjectName key="project-name" />
        <ProjectDescription key="project-description" />
      </>
    );
  }
}

export default App;
