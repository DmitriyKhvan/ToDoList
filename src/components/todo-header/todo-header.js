import React from "react";

const ToDoHeader = ({doneCountItems, todoCountItems}) => {
  return(
    <div className="header">
      <h2>ToDoList</h2> <span>{todoCountItems} more to do, {doneCountItems} done</span>
    </div>
  );
};

export default ToDoHeader;