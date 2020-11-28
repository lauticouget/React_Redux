import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  tpye: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
