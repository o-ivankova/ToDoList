import React, { require } from "react";
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

  let classNames = require("classnames");

  const buttons = buttonsData.map(({ name, label }) => {
    let btnClass = classNames({
      "filter-button": true,
      " active": filter === name,
    });

    return (
      <button
        type="button"
        className={btnClass}
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
