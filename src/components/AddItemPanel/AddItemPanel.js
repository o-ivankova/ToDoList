import React from "react";
import "./AddItemPanel.scss";

// eslint-disable-next-line react/prop-types
const AddItemPanel = ({ onAddItem }) => {
  const [input, setInput] = React.useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddItem(input);
    setInput('');
  };

  return (
    <form className="idd-item-form d-flex" onSubmit={onSubmit}>
      <input type="checkbox" disabled="" />
      <input
        type="text"
        className="form-control"
        placeholder="Type your to do"
        onChange={onInputChange}
        value = { input }
      />
    </form>
  );
};

export default AddItemPanel;
