import React from "react";
import CountUp from "react-countup";
function Counter(props) {
  return (
    <div className="col-md-4 ">
      {props.title}
      <h4>
        <CountUp end={props.count} ></CountUp>+
      </h4>
    </div>
   
  );
}

export default Counter;
