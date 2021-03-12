import React from "react";
import PropTypes from "prop-types";

function ButtonKeyboard(props) {
  return (
    <div className="button-keyboard">
      <span className="mark-keyboard">{props.mark}</span>
      <span className="value-keyboard">{props.value}</span>
    </div>
  );
}

ButtonKeyboard.propTypes = {
  mark: PropTypes.string,
  value: PropTypes.string,
};

export default ButtonKeyboard;
