import React from "react";
import "../../styles/global.scss";

const Header = (props) => {
  return (
    <div className="header-component w-full d-flex justify-content-between relative pt-4 mb-4 px-3">
      <ul className="d-flex w-full flex-wrap  justify-content-sm-end p-0">
        {props.items.map((element, index) => (
          <li
            key={index}
            className={
              "px-2 align-self-center text-uppercase text-sm " +
              (index === 0
                ? "color-title-light col-6 col-md-3 mr-auto tracking-widest text-2xl"
                : "col-6 col-md-2 color-title")
            }
          >
            {element}
          </li>
        ))}
        <li
          className="col-6 col-md-2 d-flex color-title-light justify-content-end ml-auto"
          key="contact-me-button"
        >
          <button className="mx-4 px-4 py-1 text-uppercase border-solid border-2 transition-all duration-500 border-title-light rounded-full hover:bg-red hover:text-black hover:border-red">
            contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
