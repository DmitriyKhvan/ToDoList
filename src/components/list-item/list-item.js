import React from "react";
import "./list-item.css";

const ListItem = ({label, onToggleImportant, onToggleDone, deleteItem}) => {
  return (
    <React.Fragment>
      <span
        onClick = {onToggleDone}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-warning btn-sm float-right"
        onClick = {onToggleImportant}
      >
        <i className="fa fa-exclamation-triangle"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick = {deleteItem}
      >
        <i className="fa fa-trash"></i>
      </button>
    </React.Fragment>
  );
};

export default ListItem;