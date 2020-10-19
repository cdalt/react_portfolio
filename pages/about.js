import React from "react";

function About() {
  return (
    <div className="mt-5 bg-white w-50 ml-5">
      <h1 className="border-bottom pb-3 mb-5 pt-4 ml-5">About Me</h1>
      <div className="row ml-2 mr-2">
        <div className="col-md-4 col-sm-12">
          <img
            src="https://www.virtuoso.com/getattachment/articles/virtuoso-traveler/Virtuoso-Traveler-2019-December/Belize-Jungle-Hideaway-or-Beach-Retreat/BelizeHeroGetty.jpg.aspx?lang=en-US&width=1200&height=857&ext=.jpg"
            alt="Belize"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <p className="pl-5">
            My names dalton and I'm currently attending a coding bootcamp
            through the University of Arizona. I've always been into the
            building of computers and within the past year have been watching
            udemy courses to learn more about programming!
          </p>
        </div>
      </div>
      <p className="mt-3 pb-5 ml-5 mr-5">
        <a href="https://www.linkedin.com/in/dalton-natale-0b80701ab/">
          Linkedin Profile
        </a>
        <br />

        <a href="https://github.com/Jermdude7/Good_Games_E-Z.git">
          GitHub Account
        </a>
        <br />
        <a href="file:///Users/daltonnatale/Downloads/Dalton_Natale_Resume%20(1).pdf">
          Resume
        </a>
      </p>
    </div>
  );
}

export default About;
