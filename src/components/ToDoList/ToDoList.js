import React from 'react';
import ToDoListItem from '../ToDoListItem';
import './ToDoList.css';


// eslint-disable-next-line react/prop-types
const ToDoList = ( { elements } ) => {

    // eslint-disable-next-line react/prop-types
    const list = elements.map((item) => {
     const { id, ...itemProps } = item;
      return (
        <li className='list-group-item' key={ id }>
        <ToDoListItem { ...itemProps } />
       </li>)
       });

    return (
        <ul className='list-group'>
        { list }
        </ul>
    );
};

export default ToDoList;