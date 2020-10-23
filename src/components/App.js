import React, { Component, useState } from "react";
import "../styles/App.css";
// import ProjectName from "./ProjectName";
// import ProjectDescription from "./ProjectDescription";

class App extends Component {
  render() {
    return (
      <>
        {/* <ProjectName key="project-name" />
        <ProjectDescription key="project-description" /> */}
        <div key="project-name">Hello There</div>
        <div key="project-description">General Kenobi</div>
      </>
    );
  }
}

export default App;
