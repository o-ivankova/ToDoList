import React from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.scss";

const Checkbox = ({ completed, onCheckCompleted }) => {
  return (
    <input type="checkbox" className={styles.checkbox} checked={completed} onChange={onCheckCompleted} data-testid='checkbox'/>
  );
};

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onCheckCompleted: PropTypes.func,
};

export default Checkbox;
