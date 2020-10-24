import React from "react";

class ProjectDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props["data-ns-test"]}</p>;
  }
}

export default ProjectDescription;
