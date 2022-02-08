import React from "react";
import undraw_interview from "../../images/undraw_interview.svg";

const ContactUs = (props) => {
  const copyDataToClipBoard = (data) => {
    console.log(data);
    navigator.clipboard.writeText(data.target.innerText);
  };

  return (
    <div className="contact-us-container d-flex bg-gradient-to-r from-purple-500 to-pink-500 w-full justify-content-center p-4 h-screen relative flex-row text-center flex-wrap align-items-center">
      <div className="d-flex d-md-none col-12 font-family-bebas text-3xl">
        {props.items["contact-me-text"]}
      </div>
      <div className="col-12 col-md-6">
        <img
          src={undraw_interview}
          className="w-full h-full"
          alt="lets meet image"
        />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column h-full ">
        <div className="d-none d-md-flex align-self-start font-family-bebas text-5xl">
          {props.items["contact-me-text"]}
        </div>
        <div
          className="email align-self-center text-uppercase text-2xl md:text-4xl py-5 cursor-pointer"
          onClick={copyDataToClipBoard}
        >
          {props.items["email"]}
        </div>
        <ul className="social-links align-self-end m-0 p-0 d-flex col-12 justify-center flex-wrap">
          {props.items["social-media-handles"].map((element, index) => (
            <li className="col-12 col-md-4" key={index}>
              <a
                className="m-1 px-5 py-2 w-full font-family-bebas text-uppercase border-solid border-2 transition-all duration-500 border-black rounded-full no-underline"
                href={element["social-media-link"]}
                target="_blank"
              >
                {element["social-media-text"]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* hello {props.items["email"]} */}
    </div>
  );
};

export default ContactUs;
