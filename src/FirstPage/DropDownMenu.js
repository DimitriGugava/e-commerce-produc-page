import "./DropDownMenu.css";
import { useState } from "react";

import x from "../icons/x.svg";
const DropDownMenu = (props) => {
  return (
    <div>
      {props.showDropDown && (
        <div className="DropDownContainer">
          <img src={x} className="xIcon" onClick={props.closeDropDown} />
          <h1 className="listOfPages">Collections</h1>
          <h1 className="listOfPages">Men</h1>
          <h1 className="listOfPages">Women</h1>
          <h1 className="listOfPages">About</h1>
          <h1 className="listOfPages">Contact</h1>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
