import React from "react";
import AppHeader from "../AppHeader";
import AddItemPanel from "../AddItemPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import "./App.scss";

const App = () => {
  const initialElements = [
    { id: 1, content: "Drink Coffee", done: false },
    { id: 2, content: "Learn React", done: false },
    { id: 3, content: "Have dinner", done: false },
    { id: 4, content: "Read a book", done: false },
  ];

  const [elements, setElements] = React.useState(initialElements);
  const [itemId, setItemId] = React.useState(100);

  const itemsLeftCount = elements.filter(item => !item.done).length;

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
    setItemId((currentId) => {
      return currentId++;
    });

    const newItem = {
      content: input,
      id: itemId,
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

      const newItem = { ...oldItem, done: !oldItem.done };
      
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

  return (
    <div>
      <AppHeader />
      <AddItemPanel onAddItem={ onAddItem } />
      <ToDoList
        elements={elements}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
      />
      <ItemStatusFilter itemsLeftCount={ itemsLeftCount } />
    </div>
  );
};

export default App;
