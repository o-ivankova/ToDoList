import React from "react";
import AppHeader from "../AppHeader";
import AddItemPanel from "../AddItemPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.toDoList}>
        <AppHeader />
        <AddItemPanel />
        <div className={styles.rounded}>
          <ToDoList />
          <ItemStatusFilter />
        </div>
        <span className={styles.dragAndDropInfo}>
          drag and drop to reorder the list
        </span>
      </div>
    </div>
  );
};

export default App;
