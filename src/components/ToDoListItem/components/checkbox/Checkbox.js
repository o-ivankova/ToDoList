import React from "react";
import PropTypes from "prop-types";
import "./checkbox.scss";

const Checkbox = ({ completed, onCheckCompleted }) => {
  return (
    <input type="checkbox" className='checkbox' checked={completed} onChange={onCheckCompleted} />
  );
};

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onCheckCompleted: PropTypes.func,
};

export default Checkbox;
