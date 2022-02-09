import React from "react";

import "../../styles/global.scss";

const Skills = (props) => {
  return (
    <div className="skills-container overflow-hidden w-full h-screen p-10 md:px-72 relative d-flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500">
      <p className="text-capitalize color-site-primary font-family-pacifico font-light tracking-wider text-justify p-0 h-min md:w-6/12 ">
        <span className="text-uppercase text-lg h-min color-site-primary pr-2 font-black">
          {props.items["tech-stack-title"]}
          {/* {props.items.about["about-text"]} */} skills
        </span>
        {/* {props.items.about["about-description"]} */} Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Impedit eaque sint cum deleniti
        corporis culpa odio at, debitis blanditiis quia libero laboriosam
        necessitatibus, velit fugit cupiditate tempora, unde in. Placeat.
      </p>
    </div>
  );
};

export default Skills;
