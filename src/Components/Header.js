import React, { Fragment } from "react";
import DropDown from "./DropDown";
import languages from "../Data/languages";

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
        {/* <DropDown title="Theme" list={languages} /> */}
      </div>
    </div>
  );
};

export default Header;
