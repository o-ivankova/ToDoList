import React from "react";
import PropTypes from "prop-types";
import styles from  "./TextInput.module.scss";

const TextInput = ({ onInputChange, input }) => {
  return (
    <input
      type="text"
      className={styles.addItemInput}
      placeholder="Type your to do"
      onChange={(e) => onInputChange(e)}
      value={input}
      data-testid="input"
    />
  );
};

TextInput.propTypes = {
  input: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default TextInput;
