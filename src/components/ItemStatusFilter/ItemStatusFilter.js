import React from "react";
import "./ItemStatusFilter.scss";
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
    <span className="item-status-filter-panel">
      <Counter/>
      <FilterButtons/>
      <button className="clear-button" onClick={() => onDeleteCompleted()}>
        Clear completed
      </button>
    </span>
  );
};

export default ItemStatusFilter;
