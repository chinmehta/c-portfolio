import React, { useEffect, useState } from "react";

import "../../styles/global.scss";

const MainTitle = (props) => {
  const dash = React.createRef();

  const transformDash = () => {
    // if (window.scrollY > 0) {
    //   console.log(window.scrollY);
    //   console.log(dash.current.width.baseVal.value);
    //   dash.current.style.width = dash.current.width.baseVal.value + "px";
    //   // dash.current.style.width =
    //   // dash.current.width.baseVal.value + window.scrollY + "px";
    //   // dash.current.style.width = 20 + window.scrollY + "%";
    //   dash.current.style.position = "absolute";
    //   // dash.current.style.width =
    //   //   dash.current.width.baseVal.value + window.scrollY / 3 + "px";
    //   // dash.current.style.height = 20 + window.scrollY + "%";
    // } else {
    //   dash.current.style.position = "relative";
    //   dash.current.style.height = null;
    //   dash.current.style.width = null;
    //   dash.current.classList.add("h-4");
    //   // dash.current.style.width = "100%";
    // }
  };

  useEffect(() => {
    // console.log("mount it!", dash);
    transformDash();
  }, [props.scrollEvent]);

  return (
    <div className="main-title-component relative w-full d-flex justify-content-between p-4 min-h-screen max-h-min bg-site-primary">
      <ul className="d-flex justify-content-around w-full flex-wrap p-0 md:px-3">
        {props.items["full-job-title"].map((element, index) => (
          // index === 0 ? (
          //   <span className="d-flex align-self-center col-12 col-md-auto">
          //     <li
          //       key={index}
          //       className={
          //         "pr-2 leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl hover:tracking-tight transition-all duration-1000  hover:text-title-light hover:border-black"
          //       }
          //     >
          //       {element}
          //     </li>
          //     {/* <li
          //       key="dash"
          //       className="d-flex align-self-center sm:mx-0 sm:px-0 md:mx-5 md:px-5 w-full h-4 transition-all duration-500"
          //     >
          //       <svg
          //         ref={dash}
          //         className="d-flex fill-title align-self-center justify-end transition-all duration-1000 w-full h-full"
          //         version="1.1"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <rect width="100%" height="100%" />
          //       </svg>
          //     </li> */}
          //   </span>
          // ) : (
          //   <li
          //     key={index}
          //     className={
          //       "pr-2 leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl col-12 col-md-auto hover:tracking-tight transition-all duration-1000  hover:text-title-light hover:border-black break-all lg:break-normal text-left lg:text-center"
          //       //  + (index % 2 === 0 ? "text-left" : "text-left lg:text-right")
          //     }
          //   >
          //     {element}
          //   </li>
          // )
          <li
            key={index}
            className={
              "pr-2 leading-none align-self-center tracking-tighter font-family-bebas text-uppercase color-title text-9xl lg:text-16xl col-12 col-md-auto hover:tracking-tight transition-all duration-1000  hover:text-title-light hover:border-black break-all lg:break-normal text-left lg:text-center"
            }
          >
            {element}
          </li>
        ))}
        <li
          className="col-12 d-flex justify-content-end pr-3 ml-auto align-items-center"
          key="about-me-section"
        >
          <p className="text-capitalize color-title-light font-light tracking-wider text-right md:text-center">
            <span className="text-uppercase text-lg h-min color-title pr-2 font-bold">
              {props.items.about["about-text"]}
            </span>
            {props.items.about["about-description"]}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(MainTitle);
