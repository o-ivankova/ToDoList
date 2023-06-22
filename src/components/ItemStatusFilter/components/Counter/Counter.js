import React from "react";
import { useSelector } from "react-redux";
import styles from "./Counter.module.scss";

const Counter = () => {
  const elements = useSelector((state) => state.toDoList.elements);
  const itemsLeftCount = elements.filter((el) => !el.completed).length;

  return <div className={styles.counter} data-testid="counter">{itemsLeftCount} items left</div>;
};

export default Counter;
