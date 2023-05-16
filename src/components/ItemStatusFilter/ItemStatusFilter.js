import React from "react";
import "./ItemStatusFilter.scss";

// eslint-disable-next-line react/prop-types
const ItemStatusFilter = ({ itemsLeftCount, filter, onFilterChange }) => {
  const buttonsData = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
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
    <div className="item-status-filter-panel inline-flex">
      {itemsLeftCount} items left
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
