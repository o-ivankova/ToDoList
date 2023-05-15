import React from "react";
import "./ItemStatusFilter.scss";

// eslint-disable-next-line react/prop-types
const ItemStatusFilter = ({ itemsLeftCount }) => {
  return (
    <div className="item-status-filter-panel inline-flex">
      {itemsLeftCount} items left
      <button type="button" className="btn">
        All
      </button>
      <button type="button" className="btn">
        Active
      </button>
      <button type="button" className="btn">
        Completed
      </button>
      <button type="button" className="btn">
        Clear completed
      </button>
    </div>
  );
};

export default ItemStatusFilter;
