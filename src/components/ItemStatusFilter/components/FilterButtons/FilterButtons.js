import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../../../redux/toDoListSlice";
import "./FilterButtons.scss";

const FilterButtons = () => {
  const filter = useSelector((state) => state.toDoList.filter);
  const dispatch = useDispatch();

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
        className={`filter-button ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="filter-buttons">{buttons}</div>;
};

export default FilterButtons;
