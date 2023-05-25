import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const TextInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Type your to do"
      onChange={onInputChange}
      value={input}
      onSubmit={() => onSubmit(input)}
    />
  );
};

export default TextInput;
