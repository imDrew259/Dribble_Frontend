import React, { Fragment } from "react";
import Editor from "@monaco-editor/react";

const EditorCode = () => {
  return (
    <div>
      <Editor
        height="80vh"
        width={`100%`}
        defaultLanguage="javascript"
        defaultValue="// your code goes here"
      />
    </div>
  );
};

export default EditorCode;
