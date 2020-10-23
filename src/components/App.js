import React, { Component, useState } from "react";
import projectName from "./project-name";
import "../styles/App.css";
import projectDescription from "./project-description";

class App extends Component {
  render() {
    return (
      <>
        <projectName key="project-name" />
        <projectDescription key="project-description" />
      </>
    );
  }
}

export default App;
