import React from 'react';

const ToDoListItem = ({ content, important = false }) => {
    const style = {
        color: important ? 'crimson' : 'black',
    }
    return <span style={ style }>{ content }</span>
}

export default ToDoListItem;
