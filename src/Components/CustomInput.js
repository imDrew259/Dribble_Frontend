import React from "react";
import "./Components.css";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <div className="div-input">
      <h5>Input:</h5>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className="text-area"
      ></textarea>
    </div>
  );
};

export default CustomInput;
