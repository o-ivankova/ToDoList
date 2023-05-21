import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteElement, checkCompleted } from '../../redux/toDoListSlice'

const ToDoList = () => {
  const elements = useSelector((state) => state.toDoList.elements);
  const filter = useSelector((state) => state.toDoList.filter);
  const dispatch = useDispatch();

  const filterElements = (elements, filter) => {
    switch (filter) {
      case "all": {
        return elements;
      }
      case "active": {
        return elements.filter((el) => !el.completed);
      }
      case "completed": {
        return elements.filter((el) => el.completed);
      }
      default: {
        return elements;
      }
    }
  };

  const filteredElements = filterElements(elements, filter);

  // eslint-disable-next-line react/prop-types
  const list = filteredElements.map((el) => {
    const { id, ...elementProps } = el;

    const onDeleted = (id) => {
      dispatch(deleteElement(id));
    };

    const onCheckCompleted = (id) => {
      dispatch(checkCompleted(id));
    };

    return (
      <li className="list-group-item" key={id}>
        <ToDoListItem
          {...elementProps}
          onDeleted={() => onDeleted(id)}
          onCheckCompleted={() => onCheckCompleted(id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{list}</ul>;
};

export default ToDoList;
