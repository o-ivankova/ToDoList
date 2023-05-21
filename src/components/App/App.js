import React from "react";
import AppHeader from "../AppHeader";
import AddItemPanel from "../AddItemPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="background-img">
        <div className="toDoList">
          <AppHeader />
          <AddItemPanel />
          <ToDoList />
          <ItemStatusFilter />
        </div>
      </div>
    </div>
  );
};

export default App;
