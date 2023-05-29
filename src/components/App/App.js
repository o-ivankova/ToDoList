import React from "react";
import AppHeader from "../AppHeader";
import AddItemPanel from "../AddItemPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="to-do-list">
        <AppHeader />
        <AddItemPanel />
        <div className="rounded">
          <ToDoList />
          <ItemStatusFilter />
        </div>
        <span className="drag-and-drop-info">
          drag and drop to reorder the list
        </span>
      </div>
    </div>
  );
};

export default App;
