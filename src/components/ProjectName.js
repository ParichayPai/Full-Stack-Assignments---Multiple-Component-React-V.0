import React from "react";

class ProjectName extends React.Component {
  constructor(props) {
    console.log(props.dataNsTest);
    super(props);
    this.projectName = props.dataNsTest;
  }
  render() {
    return <h1>{this.projectName}</h1>;
  }
}

export default ProjectName;
