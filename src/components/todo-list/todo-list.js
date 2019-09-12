import React, { Component } from "react";
import ToDoHeader from "../todo-header";
import ListItemBox from "../list-item-box";
import AddItem from "../add-item";
import "./todo-list.css";


export default class ToDoList extends Component {

  id = 100;
  _ACTIVE = 1;
  _PASSIVE = 0;

  state = {
    // todoData: [
    //   {id: 1, label: "Make Awesome App", important: false, done: false},
    //   {id: 2, label: "Learn React", important: false, done: false},
    //   {id: 3, label: "Have a Lunch", important: false, done: false}

    // ]

    todoData: [
      this.createNewItem("Make Awesome App"),
      this.createNewItem("Learn React"),
      this.createNewItem("Have a Lunch")
    ]
  }

  createNewItem(label){
    return {
      id: this.id++,
      label: label,
      important: false,
      done: false,
      donePriority: 0,
      importantPriority: 0
    }
  };

  onChangeTodoDataImportant = (data, id, donePriority, importantPriority) => {
    const idx = data.findIndex((item) => item.id === id);
    const oldItem = data[idx];
    let doneStatus = this._PASSIVE; 
    let importantStatus = this._PASSIVE;
    let importantValue = false;
    if (oldItem[importantPriority] === this._PASSIVE && oldItem[donePriority] === this._PASSIVE) {
      doneStatus = this._PASSIVE;
      importantStatus = this._ACTIVE;
      importantValue = true;
    } else if (oldItem[importantPriority] === this._PASSIVE && oldItem[donePriority] === this._ACTIVE) {
      // doneStatus = 0;
      // importantStatus = -1;
      // importantValue = true;
      return this.state.todoData;

    } else if(oldItem[importantPriority] === this._ACTIVE && oldItem[donePriority] === this._PASSIVE) {
      doneStatus = this._PASSIVE;
      importantStatus = this._PASSIVE;
      importantValue = false;
    } 
    
    const newItem = { ...oldItem, important: importantValue, done: false, [donePriority]: doneStatus, [importantPriority]: importantStatus};

    const newTodoData = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ];

    return newTodoData
  }

  onChangeTodoDataDone = (data, id, donePriority, importantPriority) => {
    const idx = data.findIndex((item) => item.id === id);
    const oldItem = data[idx];
    let doneStatus = this._PASSIVE; 
    let importantStatus = this._PASSIVE;
    let doneValue = false;
    if (oldItem[importantPriority] === this._PASSIVE && oldItem[donePriority] === this._PASSIVE) {
      doneStatus = this._ACTIVE;
      importantStatus = this._PASSIVE;
      doneValue = true;
    } else if (oldItem[importantPriority] === this._PASSIVE && oldItem[donePriority] === this._ACTIVE) {
      doneStatus = this._PASSIVE;
      importantStatus = this._PASSIVE;
      doneValue = false;
    } else if(oldItem[importantPriority] === this._ACTIVE && oldItem[donePriority] === this._PASSIVE) {
      doneStatus = this._ACTIVE;
      importantStatus = this._PASSIVE;
      doneValue = true;
    } 
    
    const newItem = { ...oldItem, important: false, done: doneValue, [donePriority]: doneStatus, [importantPriority]: importantStatus};

    const newTodoData = [
      ...data.slice(0, idx),
      newItem,
      ...data.slice(idx + 1)
    ];

    return newTodoData
  }


  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
        return {
          todoData: this.onChangeTodoDataImportant(todoData, id, "donePriority", "importantPriority")
        }
      });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {

      return {
        todoData: this.onChangeTodoDataDone(todoData, id, "donePriority","importantPriority")
      }
    });
  };

  addItem = (label) => {
    //console.log(label);
    const newItem = this.createNewItem(label);

    this.setState(({todoData}) =>{
      const newTodoData = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newTodoData
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((item) => item.id === id);

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newTodoData
      }
    });
  }



  render() {

    const {todoData} = this.state;

    const sortTodoData = [...todoData]
      .sort( (a, b) => a.donePriority - b.donePriority  )
      .sort( (a, b) => b.importantPriority - a.importantPriority);

    //console.log(sortTodoData);

    const doneCountItems = todoData.filter((item) => item.done).length;
    const todoCountItems = todoData.length - doneCountItems;

    return (
      <div id="ToDoList">
        <ToDoHeader 
          doneCountItems = {doneCountItems}
          todoCountItems = {todoCountItems}
        />
        <ListItemBox 
          todoData = {sortTodoData}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          deleteItem = {this.deleteItem}
        />
        <AddItem addItem = {this.addItem}/>
      </div>
    );
  }
}
