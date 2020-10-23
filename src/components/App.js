import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "ProjectName",
      projectDescription: "ProjectDesription"
    };
  }
  render() {
    return (
      <>
        <ProjectName dataNsTest={this.state.projectName} />
        <ProjectDescription dataNsTest={this.state.projectDescription} />
      </>
    );
  }
}

export default App;
