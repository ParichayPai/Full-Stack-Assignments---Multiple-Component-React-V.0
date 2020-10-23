import React from "react";

class ProjectDescription extends React.Component {
  constructor(props) {
    super(props);
    this.projectDescription = props.dataNsTest;
  }
  render() {
    return <p>{this.projectDescription}</p>;
  }
}

export default ProjectDescription;
