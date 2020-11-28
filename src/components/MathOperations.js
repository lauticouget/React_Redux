import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {} from "./Button";

const MathOperations = ({ onclickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onclickOperation} />
    <Button text="-" clickHandler={onclickOperation} />
    <Button text="*" clickHandler={onclickOperation} />
    <Button text="=/" clickHandler={onclickOperation} />
  </section>
);

MathOperations.propTypes = {
  onclickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
