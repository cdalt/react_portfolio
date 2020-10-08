import React from "react";
import Project from "./project";

class Portfolio extends React.Component {
  render() {
    return (
      <div class="mt-5 bg-white w-50 ml-5">
        <h1 class="border-bottom pb-3 mb-5 pt-4 ml-5">Portfolio</h1>
        <div class="row">
          <Project
            link={"https://jermdude7.github.io/Good_Games_E-Z/"}
            src="https://github.com/Jermdude7/Good_Games_E-Z/raw/master/assets/preview-top.png"
          />
          <Project />
        </div>
        <div class="row">
          <Project />
          <Project />
        </div>
        <div class="row">
          <Project />
        </div>
      </div>
    );
  }
}

export default Portfolio;
