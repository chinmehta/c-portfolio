import React, { useEffect } from "react";
import "../../styles/global.scss";
import moon from "../../images/moon.png";
import stars from "../../images/stars.png";
import mountains_behind from "../../images/mountains_behind.png";
import momountains_front from "../../images/mountains_front.png";

const Parallax = (props) => {
  const starsRef = React.createRef();
  const moonRef = React.createRef();
  const mountainsBehindRef = React.createRef();
  const momountainsFrontRef = React.createRef();
  const greetTextRef = React.createRef();

  const transformDash = () => {
    const value = window.scrollY;
    const bounding = starsRef.current.getBoundingClientRect();
    // if (
    //   bounding.top >= 0 &&
    //   bounding.left >= 0 &&
    //   bounding.bottom <=
    //     (window.innerHeight || document.documentElement.clientHeight) &&
    //   bounding.right <=
    //     (window.innerWidth || document.documentElement.clientWidth)
    //   //   bounding.right <= window.innerWidth &&
    //   //   bounding.bottom <= window.innerHeight
    // ) {
    //   console.log("Element is in the viewport!");
    // } else {
    //   console.log("Element is NOT in the viewport!");
    // }

    starsRef.current.style.left = value + "px";
    moonRef.current.style.top = value + "px";
    greetTextRef.current.style.top = value * 0.7 + "px";
    mountainsBehindRef.current.style.top = value * 0.5 + "px";
  };

  useEffect(() => {
    transformDash();
  }, [props.scrollEvent]);

  return (
    <div className="parallax-container overflow-hidden bg-site-primary parallax-blend w-full h-screen pt-20 p-10 relative d-flex justify-center items-center text-center">
      <img
        ref={starsRef}
        className="position-absolute top-0 left-0 w-full object-cover h-full transition-all duration-75"
        src={stars}
        alt="stars"
      />
      <img
        ref={moonRef}
        className="position-absolute left-0 w-full object-cover mix-blend-screen h-full transition-all duration-75"
        src={moon}
        alt="moon"
      />
      <img
        ref={mountainsBehindRef}
        className="position-absolute left-0 w-full object-cover h-full transition-all duration-75"
        src={mountains_behind}
        alt="mountain behind"
      />
      <div
        className="position-absolute left-0 w-full d-flex justify-center transition-all duration-75"
        ref={greetTextRef}
      >
        <span className="font-family-bebas object-cover text-8xl lg:text-16xl text-white z-10 transition-all duration-75">
          Hey There.
        </span>
      </div>
      <img
        ref={momountainsFrontRef}
        className="position-absolute top-0 left-0 w-full object-cover z-20 h-full transition-all duration-75"
        src={momountains_front}
        alt="mountain front"
      />
    </div>
  );
};

export default Parallax;
