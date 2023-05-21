import React from "react";
import "./ToDoListItem.scss";
import { BsX } from "react-icons/bs";
import PropTypes from 'prop-types';

const ToDoListItem = ({ content, completed, onDeleted, onCheckCompleted }) => {
  return (
    <div
      className={`todo-list-item ${completed && " completed"} d-flex`}
      onClick={onCheckCompleted}
    >
      <div className="todo-list-item-content d-flex">
        <input type="checkbox" checked={completed} />
        {content}
      </div>
      <button
        type="button"
        className="btn btn-sm float-right"
        onClick={onDeleted}
      >
        <BsX />
      </button>
    </div>
  );
};

ToDoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func,
  onCheckCompleted: PropTypes.func,
};

export default ToDoListItem;
