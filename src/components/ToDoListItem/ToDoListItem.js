import React from "react";
import "./ToDoListItem.scss";
import { BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import Checkbox from "./components/checkbox/Checkbox";

const ToDoListItem = ({ content, completed, onDeleted, onCheckCompleted }) => {
  return (
    <span className={`todo-list-item ${completed && " completed"}`}>
      <div className="todo-list-item-content">
        <Checkbox completed={completed} onCheckCompleted={onCheckCompleted} />
        {content}
      </div>
      <button type="button" className="delete-btn" onClick={onDeleted}>
        <BsX />
      </button>
    </span>
  );
};

ToDoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func,
  onCheckCompleted: PropTypes.func,
};

export default ToDoListItem;
