import React, { Fragment } from "react";
import Editor from "@monaco-editor/react";
import "./Components.css";

// Building Editor
const EditorCode = (props) => {
  console.log(props.title);
  return (
    <div className="editor">
      <Editor
        height="80vh"
        width={`100%`}
        language={props.title.toLowerCase()}
        theme="vs-dark"
        defaultValue="// your code goes here"
      />
    </div>
  );
};

export default EditorCode;
