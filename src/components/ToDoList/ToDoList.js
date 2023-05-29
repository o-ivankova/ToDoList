import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteElement,
  checkCompleted,
  reorderElements,
} from "../../redux/toDoListSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const handleOnDragEnd = (result) => {
    dispatch(reorderElements(result));
  };

  const onDeleted = (id) => {
    dispatch(deleteElement(id));
  };

  const onCheckCompleted = (id) => {
    dispatch(checkCompleted(id));
  };

  const filteredElements = filterElements(elements, filter);

  const list = filteredElements.map((el) => {
    const { id } = el;

    const index = elements.findIndex((el) => el.id === id);

    return (
      <Draggable key={id} draggableId={String(id)} index={index}>
        {(provided) => (
          <li
            className="list-group-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
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
