import React from "react";

const ToDoHeader = ({todoData}) => {

  const doneCountItems = todoData.filter((item) => item.done).length;
  const todoCountItems = todoData.length - doneCountItems;

  return(
    <div className="header">
      <h2>ToDoList</h2> <span>{todoCountItems} more to do, {doneCountItems} done</span>
    </div>
  );
};

export default ToDoHeader;