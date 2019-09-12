import React from "react";
import ListItem from "../list-item";
import "./list-item-box.css";

const ListItemBox = ({todoData, onToggleImportant, onToggleDone, deleteItem}) => {

  const elements = todoData.map((item) => {
    const {id, label, important, done} = item;

    let className = "list-group-item list-item";
    if (important) {
      className += " list-group-item-danger";
    }

    if (done) {
      className += " itemDone";
    }

    return (
      <li key = {id} className={className}>
         <ListItem 
         label = {label} 
         onToggleImportant = {() => onToggleImportant(id)}
         onToggleDone = {() => onToggleDone(id)}
         deleteItem = {() => deleteItem(id)}
         /> 
      </li>
    )
  });

  return (
    <div className="list-item-box">
      <ul className="list-group">
        {elements}
      </ul>
    </div>
  );
};

export default ListItemBox;
