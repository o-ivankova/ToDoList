import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import AddItemPanel from "../AddItemPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import "./App.scss";

const App = () => {
  /* const initialElements = [
    { id: 1, content: "Drink Coffee", completed: false },
    { id: 2, content: "Learn React", completed: false },
    { id: 3, content: "Have dinner", completed: false },
    { id: 4, content: "Read a book", completed: false },
  ]; */

  const [elements, setElements] = useState([]);
  const [elementId, setElementId] = useState(1);
  const [filter, setFilter] = useState("all"); //all, active, completed

  const itemsLeftCount = elements.filter((el) => !el.completed).length;

  const deleteItem = (id) => {
    setElements((elements) => {
      const index = elements.findIndex((el) => el.id === id);
      const newElements = [
        ...elements.slice(0, index),
        ...elements.slice(index + 1),
      ];

      return newElements;
    });
  };

  const addItem = (input) => {
    setElementId((currentId) => {
      return ++currentId;
    });

    const newItem = {
      content: input,
      completed: false,
      id: elementId,
    };

    setElements((elements) => {
      const newArray = [...elements, newItem];
      return newArray;
    });
  };

  const onToggleDone = (id) => {
    setElements((elements) => {
      const index = elements.findIndex((el) => el.id === id);
      const oldItem = elements[index];

      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newArray = [
        ...elements.slice(0, index),
        newItem,
        ...elements.slice(index + 1),
      ];

      return newArray;
    });
  };

  const onAddItem = (input) => {
    addItem(input);
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

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

  useEffect(() => {
    localStorage.setItem("elementId", JSON.stringify(elementId));
  }, [elementId]);

  useEffect(() => {
    const elementId = JSON.parse(localStorage.getItem("elementId"));
    if (elementId) {
      setElementId(elementId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("elements", JSON.stringify(elements));
  }, [elements]);

  useEffect(() => {
    const elements = JSON.parse(localStorage.getItem("elements"));
    if (elements) {
      setElements(elements);
    }
  }, []);

  return (
    <div>
      <AppHeader />
      <AddItemPanel onAddItem={onAddItem} />
      <ToDoList
        elements={filterElements(elements, filter)}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
      />
      <ItemStatusFilter
        itemsLeftCount={itemsLeftCount}
        filter={filter}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default App;
