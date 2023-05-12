import React from 'react';
import  './ToDoListItem.scss';
//import PropTypes from 'prop-types';

/* ToDoListItem.propTypes = {
  content: PropTypes.object,
}; */

// eslint-disable-next-line react/prop-types
const ToDoListItem = ({ content }) => {
  const [isDone, setIsDone] = React.useState(false);
  const [isImportant, setIsImportant] = React.useState(false);
 
  const onContentClick = () => { 
    setIsDone((prevState) => {
      return !prevState;
    })
  };

  const onMarkImportant = () => {
    setIsImportant((prevState) => {
      return !prevState
    });
  };
  
      return (
    <span span className={`todo-list-item ${isDone && ' done'} ${isImportant && ' important'}`}>
    <span className='todo-list-item-content' onClick={ onContentClick }>
        { content }
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={ onMarkImportant }>
            <i className='fa fa-exclamation'/>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
        </span>
    );
}

export default ToDoListItem;
