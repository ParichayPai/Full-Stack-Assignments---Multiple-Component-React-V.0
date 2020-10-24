import React from "react";

class ProjectName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props["data-ns-test"]}</h1>;
  }
}

export default ProjectName;
