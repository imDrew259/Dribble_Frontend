import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./Components.css";

function SplitBasicExample(props) {
  const title = props.title;
  const setTitle = props.setTitle;

  useEffect(() => {
    setTitle(props.defaultV);
  }, []);

  const clickHandler = (event) => {
    setTitle(event.target.textContent);
  };
  return (
    <Dropdown className="dd-mv" as={ButtonGroup}>
      <Button variant="success" className="btn-mv btn-mv-content">
        {title}
      </Button>

      <Dropdown.Toggle
        split
        variant="success"
        id="dropdown-split-basic"
        className="btn-mv"
      />

      <Dropdown.Menu>
        {props.list.map((listItem, index) => (
          <Dropdown.Item id={index} key={index} onClick={clickHandler}>
            {listItem.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;
