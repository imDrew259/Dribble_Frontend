import "./App.css";
import React, { useState } from "react";
import EditorCode from "./Components/EditorCode";
import Header from "./Components/Header";
import CustomInput from "./Components/CustomInput";

function App() {
  const [title, setTitle] = useState("CPP");
  const [customInput, setCustomInput] = useState();
  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} />
      <div className="div-ed-io">
        <EditorCode title={title} />
        <CustomInput
          customInput={customInput}
          setCustomInput={setCustomInput}
        />
      </div>
    </div>
  );
}

export default App;
