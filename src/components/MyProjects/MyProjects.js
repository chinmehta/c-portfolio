import React from "react";
import "../../styles/global.scss";

const MyProjects = (props) => {
  return (
    <div className="my-projects-container bg-gradient-to-r from-mypeachy to-mypeach d-flex w-full p-4 relative d-flex flex-column">
      <div className="my-project-title tracking-tighter font-family-bebas text-uppercase color-site-primary text-9xl lg:text-16xl">
        {props.items["featured-projects-title"]}
      </div>
      <div className="line d-none d-md-block left-1/2 position-absolute h-full w-0.5 bg-black top-0"></div>
      <div className="list-container p-4">
        {props.items["featured-projects-array"].map((element, index) => (
          <div
            className={
              "list-item relative list-none w-full md:w-5/12 text-left card xs:mt-2 md:-mt-4 " +
              (index % 2 === 0
                ? "justify-content-start mr-auto md:text-right"
                : "justify-content-end ml-auto")
            }
            key={index}
          >
            <div class="card-body">
              <div className="project-name text-uppercase text-xl font-bold">
                {element["project-name"]}
              </div>
              <div className="project-designation text-xs color-title-light italic">
                {element["project-designation"]}
              </div>
              <div className="project-description text-sm color-title">
                {element["project-desciption"]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
