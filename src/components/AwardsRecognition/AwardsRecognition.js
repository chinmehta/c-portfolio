import React from "react";

import "../../styles/global.scss";

const AwardsRecognition = (props) => {
  const valueHeadingOne = props.items["awards-recognition-title"].substr(
    0,
    props.items["awards-recognition-title"].indexOf(" ")
  );
  const valueHeadingTwo = props.items["awards-recognition-title"].substr(
    props.items["awards-recognition-title"].indexOf(" ") + 1
  );

  return (
    <div className="bg-site-primary main-title-component w-full d-flex justify-content-between p-4 h-screen flex-wrap relative">
      <div className="break-all lg:break-normal leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl ">
        {valueHeadingOne}
        <span className="break-all lg:break-normal sm:inline md:hidden leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl ">
          {valueHeadingTwo}
        </span>
      </div>
      <div className="awards-list-container d-flex items-center justify-center m-auto capitalize ">
        <ul className="d-flex justify-content-around w-full flex-wrap p-0 md:px-3 flex-column">
          {props.items["awards-recognition-list"].map((element, index) => (
            <li key={index}>
              <span className="color-title-light text-3xl pr-1">
                {element["award-title"]}
              </span>
              <span className="color-title text-uppercase break-normal">
                ({element["award-company"]})
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:inline leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl ">
        {valueHeadingTwo}
      </div>
    </div>
  );
};

export default AwardsRecognition;
