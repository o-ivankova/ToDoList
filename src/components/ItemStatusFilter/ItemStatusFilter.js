import React from "react";
import "./ItemStatusFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllCompleted, changeFilter } from "../../redux/toDoListSlice";

const ItemStatusFilter = () => {
  const elements = useSelector((state) => state.toDoList.elements);
  const filter = useSelector((state) => state.toDoList.filter);
  const dispatch = useDispatch();

  const onDeleteCompleted = () => {
    dispatch(deleteAllCompleted());
  };

  const itemsLeftCount = elements.filter((el) => !el.completed).length;

  const onFilterChange = (filter) => {
    dispatch(changeFilter(filter));
  };

  const buttonsData = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? "active" : "";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <span className="item-status-filter-panel">
      {itemsLeftCount} items left
      {buttons}
      <button type="btn clear" onClick={() => onDeleteCompleted()}>
        Clear completed
      </button>
    </span>
  );
};

export default ItemStatusFilter;
