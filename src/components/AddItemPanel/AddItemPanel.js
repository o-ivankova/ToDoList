import React from "react";
import { useDispatch } from "react-redux";
import { addElement } from "../../redux/toDoListSlice";
import "./AddItemPanel.scss";

const AddItemPanel = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(input);
    setInput("");
  };

  const addItem = (input) => {
    dispatch(addElement(input));
  };

  return (
    <div className='add-item-panel'>
    <form className="add-item-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type your to do"
        onChange={onInputChange}
        value={input}
      />
    </form>
    </div>
  );
};

export default AddItemPanel;
