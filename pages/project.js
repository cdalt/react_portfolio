import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <div class="col-md-6 col-sm-12">
        <a id="proj" href={this.props.link}>
          <img
            src={this.props.src}
            alt="proj1"
            class="img-fluid pr-5 ml-5 pb-5 w-75"
          />
        </a>
      </div>
    );
  }
}

export default Project;
