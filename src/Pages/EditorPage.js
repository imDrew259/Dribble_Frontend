import "./Pages.css";
import React, { useState, useRef } from "react";
import EditorCode from "../Components/EditorCode";
import Header from "../Components/Header";
import CustomInput from "../Components/CustomInput";
import ShowOutput from "../Components/ShowOutput";
import Button from "react-bootstrap/Button";

const EditorPage = () => {
  const [title, setTitle] = useState("CPP");
  const [customInput, setCustomInput] = useState();
  const code = useRef(null);

  const clickHandler = () => {
    console.log(code.current);
    console.log(customInput);
    console.log(title);
  };

  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} />
      <div className="div-ed-io">
        <EditorCode title={title} code={code} />
        <div className="io">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <ShowOutput />
          <Button
            variant="outline-dark"
            className="compile"
            onClick={clickHandler}
          >
            Compile & Run
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
