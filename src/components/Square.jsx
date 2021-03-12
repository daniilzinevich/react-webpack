import React from "react";
import PropTypes from "prop-types";

function Square(props) {
  const style = {
    color: props.colorFigure,
    background: props.colorBoard,
  };
  return (
    <button
      className={props.value ? "square square--fill" : "square"}
      style={style}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

Square.propTypes = {
  colorFigure: PropTypes.string.isRequired,
  colorBoard: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
