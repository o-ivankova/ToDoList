import React from "react";
import styles from "./ItemStatusFilter.module.scss";
import { useDispatch } from "react-redux";
import { deleteAllCompleted } from "../../redux/toDoListSlice";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Counter from "./components/Counter/Counter";

const ItemStatusFilter = () => {
  const dispatch = useDispatch();

  const onDeleteCompleted = () => {
    dispatch(deleteAllCompleted());
  };

  return (
    <span className={styles.itemStatusFilterPanel} data-testid="status-filter-panel">
      <Counter/>
      <FilterButtons/>
      <button className={styles.clearButton} onClick={() => onDeleteCompleted()} data-testid="clear-button">
        Clear completed
      </button>
    </span>
  );
};

export default ItemStatusFilter;
