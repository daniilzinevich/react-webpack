import React from "react";
import { getData } from "localStorageUtil";
import PropTypes from "prop-types";

function Menu(props) {
  return (
    <ul className="menu">
      <li className="menu-item" onClick={() => props.changeLink("newGame")}>
        New Game
      </li>
      <li
        className={
          getData("saveGame") ? "menu-item" : "menu-item menu-item--disabled"
        }
        onClick={() => props.changeLink("continue")}
      >
        Continue
      </li>
      <li className="menu-item" onClick={() => props.changeLink("settings")}>
        Settings
      </li>
      <li className="menu-item" onClick={() => props.changeLink("statistics")}>
        Statistics
      </li>
      <li
        className="menu-item"
        onClick={() => props.changeLink("shortcutKeys")}
      >
        Shortcut keys
      </li>
    </ul>
  );
}

Menu.propTypes = {
  changeLink: PropTypes.func.isRequired,
};

export default Menu;
