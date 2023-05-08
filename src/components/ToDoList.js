import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    return (
        <ul>
        <li><ToDoListItem content='Drink coffee'/></li>
        <li><ToDoListItem
        content='Create an app'
        important/></li>
        </ul>
    );
};

export default ToDoList;