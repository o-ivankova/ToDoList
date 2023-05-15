import React from 'react';
import  './ToDoListItem.scss';
import { BsX } from "react-icons/bs";
//import PropTypes from 'prop-types';

/* ToDoListItem.propTypes = {
  content: PropTypes.object,
}; */

// eslint-disable-next-line react/prop-types
const ToDoListItem = ({ content, done, onDeleted, onToggleDone }) => {

      return (
    <span span className={`todo-list-item ${done && ' done'} d-flex`}>
    <span className='todo-list-item-content d-flex' onClick={ onToggleDone }>
        { content }
        </span>
        <button type="button" className="btn btn-sm float-right" onClick={ onDeleted }>
        <BsX />
      </button>
        </span>
    );
}

export default ToDoListItem;
