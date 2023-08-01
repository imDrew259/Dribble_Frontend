import "./Pages.css";
import React, { useState, useRef } from "react";
import EditorCode from "../Components/EditorCode";
import Header from "../Components/Header";
import CustomInput from "../Components/CustomInput";
import ShowOutput from "../Components/ShowOutput";
import Button from "react-bootstrap/Button";

const EditorPage = () => {
  const [title, setTitle] = useState("CPP");
  const [theme, setTheme] = useState("vs-dark");
  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState("");
  const code = useRef("// your code goes here");
  console.log(output);
  const clickHandler = () => {
    console.log(code.current);
    console.log(customInput);
    console.log(title);
    const cd = !code.current ? "" : code.current;
    const lang = title;
    const input = customInput;

    fetch("http://localhost:8080/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: cd,
        lang,
        input,
      }),
    })
      .then((res) => res.json()) // Return the promise from res.json()
      .then((response) => {
        if (!response.output.stderr) {
          setOutput(response.output.stdout);
        } else setOutput(response.output.stderr);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <Header
        title={title}
        setTitle={setTitle}
        theme={theme}
        setTheme={setTheme}
      />
      <div className="div-ed-io">
        <EditorCode title={title} code={code} theme={theme} />
        <div className="io">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <ShowOutput output={output} />
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
