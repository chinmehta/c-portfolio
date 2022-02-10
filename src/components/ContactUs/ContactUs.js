import React from "react";
import undraw_interview from "../../images/undraw_interview.svg";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const ContactUs = (props) => {
  const alertRef = React.createRef();

  const copyDataToClipBoard = (data) => {
    // console.log(data.target.innerText);
    navigator.clipboard.writeText(data.target.innerText);
    alertRef.current.classList.remove("d-none");
    setTimeout(() => {
      alertRef.current.classList.add("d-none");
    }, 1500);
  };

  return (
    <div
      id="contactUsSection"
      className="contact-us-container bg-gradient-to-r from-pink to-purple d-flex w-full justify-content-center p-4 h-screen relative flex-row text-center flex-wrap align-items-center"
    >
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
      <div className="col-12 col-md-6 d-flex flex-column h-min ">
        <div className="d-none d-md-flex align-self-start font-family-bebas text-5xl">
          {props.items["contact-me-text"]}
        </div>
        <div
          className="email align-self-center text-uppercase text-2xl md:text-3xl py-5 cursor-pointer"
          onClick={copyDataToClipBoard}
        >
          {props.items["email"]}
        </div>
        <ul className="social-links align-self-end m-0 p-0 d-flex col-12 justify-center flex-wrap">
          {props.items["social-media-handles"].map((element, index) => (
            <li
              className="m-1 col-12 col-md-4 transition-all duration-500  rounded-full"
              key={index}
            >
              <Button
                variant="outlined"
                href={element["social-media-link"]}
                target="_blank"
              >
                {/* <a
                  className="w-full color-site-primary font-family-bebas text-uppercase no-underline tracking-widest"
                  href={element["social-media-link"]}
                  target="_blank"
                > */}
                {element["social-media-text"]}
                {/* </a> */}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Alert
        ref={alertRef}
        className="position-absolute bottom-10 left-50 d-none"
        severity="success"
        color="info"
      >
        COPIED
      </Alert>
      {/* hello {props.items["email"]} */}
    </div>
  );
};

export default React.memo(ContactUs);
