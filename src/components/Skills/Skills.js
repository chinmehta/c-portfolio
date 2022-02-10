import React from "react";
import { TagCloud } from "react-tagcloud";
import "../../styles/global.scss";

const Skills = (props) => {
  const skillsArray = [];

  props.items["tech-stack-array"].map((element, index) => {
    let obj = {
      value: element,
      count: Math.round(Math.random() * 90),
    };
    skillsArray.push(obj);
  });

  return (
    <div className="skills-container overflow-hidden w-full p-10  relative d-flex items-center justify-center  bg-gradient-to-r from-darkgreygradient to-lightgreygradient">
      <div className="text-capitalize font-light tracking-wider text-justify p-0 h-min md:w-10/12 ">
        <div className="text-uppercase color-site-primary text-9xl lg:text-16xl h-min font-family-bebas pr-2">
          {props.items["tech-stack-title"]}
        </div>
        <div className="tag-cloud">
          <TagCloud minSize={15} maxSize={45} tags={skillsArray} />
        </div>
        {/* {props.items["tech-stack-description"]} */}
      </div>
    </div>
  );
};

export default React.memo(Skills);
