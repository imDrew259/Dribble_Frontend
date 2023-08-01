import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import "./Components.css";

// Building Editor
const EditorCode = (props) => {
  console.log(props.theme);
  const editorHandler = (editor) => {
    props.code.current = editor;
  };
  return (
    <div className="editor">
      <Editor
        height="80vh"
        width={`100%`}
        language={props.title.toLowerCase()}
        theme={props.theme.toLowerCase()}
        defaultValue="// your code goes here"
        onChange={editorHandler}
      />
    </div>
  );
};

export default EditorCode;
