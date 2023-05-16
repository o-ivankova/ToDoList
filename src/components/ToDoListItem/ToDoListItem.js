import React from "react";
import "./ToDoListItem.scss";
import { BsX } from "react-icons/bs";
//import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ToDoListItem = ({ content, completed, onDeleted, onToggleDone }) => {
  return (
    <span
      className={`todo-list-item ${completed && " completed"} d-flex`}
      onClick={onToggleDone}
    >
      <input type="checkbox" checked={completed} />
      <div className="todo-list-item-content d-flex">{content}</div>
      <button
        type="button"
        className="btn btn-sm float-right"
        onClick={onDeleted}
      >
        <BsX />
      </button>
    </span>
  );
};

export default ToDoListItem;
