import React from "react";
import "./Components.css";

const CustomInput = (props) => {
  console.log(props.output);
  return (
    <div className="div-output">
      <h5>Output:</h5>
      <div className="output">{props.output}</div>
    </div>
  );
};

export default CustomInput;
