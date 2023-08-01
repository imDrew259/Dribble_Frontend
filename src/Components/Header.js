import React, { Fragment } from "react";
import DropDown from "./DropDown";
import languages from "../Data/languages";
import themes from "../Data/themes";

import "./Components.css";

const Header = (props) => {
  return (
    <div>
      <div className="strip"></div>
      <div className="dd">
        <DropDown
          title={props.title}
          setTitle={props.setTitle}
          list={languages}
          defaultV="CPP"
        />
        <DropDown
          title={props.theme}
          setTitle={props.setTheme}
          list={themes}
          defaultV="VS-Dark"
        />
      </div>
    </div>
  );
};

export default Header;
