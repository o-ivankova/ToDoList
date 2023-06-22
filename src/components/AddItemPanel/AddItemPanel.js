import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addElement } from "../../redux/toDoListSlice";
import TextInput from "./components/TextInput";
import styles from "./AddItemPanel.module.scss";

const AddItemPanel = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addElement(input));
    setInput("");
  };

  return (
      <form className={styles.addItemForm} onSubmit={onSubmit} data-testid="addItemForm">
        <TextInput onInputChange={onInputChange} input={input}/>
      </form>
  );
};

export default AddItemPanel;
