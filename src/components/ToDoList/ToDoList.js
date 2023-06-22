import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import {
  deleteElement,
  checkCompleted,
  reorderElements,
} from "../../redux/toDoListSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ToDoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toDoList);

  const handleOnDragEnd = (result) => {
    dispatch(reorderElements(result));
  };

  const onDeleted = (id) => {
    dispatch(deleteElement(id));
  };

  const onCheckCompleted = (id) => {
    dispatch(checkCompleted(id));
  };

  const elements = (state) => state.elements;
  const filter = (state) => state.filter;

  const filterElements = createSelector(
    elements,
    filter,
    (elements, filter) => {
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
    }
  );

  const filteredElements = filterElements(state);

  const list = filteredElements.map((el) => {
    const { id } = el;

    const index = filteredElements.findIndex((el) => el.id === id);

    return (
      <Draggable key={id} draggableId={String(id)} index={index}>
        {(provided) => (
          <li
            className="list-group-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            data-testid="list-group-item"
          >
            <ToDoListItem
              {...el}
              index={index}
              onDeleted={() => onDeleted(id)}
              onCheckCompleted={() => onCheckCompleted(id)}
            />
          </li>
        )}
      </Draggable>
    );
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul
            className="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid="list"
          >
            {list}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDoList;
