import React from "react";
import styles from "./ToDoListItem.module.scss";
import { BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import Checkbox from "./components/checkbox/Checkbox";
//import classNames from "classnames";

const ToDoListItem = ({ content, completed, onDeleted, onCheckCompleted }) => {
/*   let itemClass = classNames({
    "todo-list-item": true,
    " completed": completed,
  }); */

  return (
    <span className={completed? styles.todoListItemCompleted : styles.todoListItem} data-testid="to-do-list-item">
      <div className={styles.todoListItemContent} data-testid="todo-list-item-content">
        <Checkbox completed={completed} onCheckCompleted={onCheckCompleted}/>
        {content}
      </div>
      <button type="button" className={styles.deleteBtn} onClick={onDeleted} data-testid="delete-btn">
        <BsX data-testid="delete-icon"/>
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
