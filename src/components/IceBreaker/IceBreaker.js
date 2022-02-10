import React from "react";

const IceBreaker = (props) => {
  return (
    <div className="bg-site-primary ice-breaker-component w-full d-flex justify-content-center p-4 h-screen flex-wrap relative align-items-center">
      <div className="col-12 col-md-8 h-min text-center align-items-center text-uppercase color-title-light mt-auto">
        {props.items["ice-breaker-title"]}
      </div>
      <div className="col-12 col-md-8 h-min text-center align-items-center text-capitalize color-title mb-auto text-xl">
        {props.items["ice-breaker-desription"]}
      </div>
    </div>
  );
};

export default React.memo(IceBreaker);
