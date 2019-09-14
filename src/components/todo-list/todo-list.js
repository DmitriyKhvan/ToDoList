import React, { Component } from "react";
import ToDoHeader from "../todo-header";
import ListItemBox from "../list-item-box";
import AddItem from "../add-item";
import TodoApiService from "../../services/todoapi-service";
import "./todo-list.css";


export default class ToDoList extends Component {


  id = 0;
  todoApiService = new TodoApiService();

  state = {
    todoData: []
  }

  componentDidMount() {
    this.todoApiService.getAllTodoData().then((todoData) => {
      this.setState({
        todoData
      })
      this.id = todoData[todoData.length-1].id + 1;
    });
  };

  createNewItem(label) {
    return {
      id: this.id++,
      label: label,
      important: false,
      done: false
    }
  };

  onTodoItemChange = (data, id, propsName) => {
    const idx = data.findIndex((item) => item.id === id);
    const oldItem = data[idx];
    let newItem = {}

    if(propsName === 'important'){
      newItem = { ...oldItem, [propsName]: !oldItem[propsName], done: false};
    } else {
      newItem = { ...oldItem, important: false, [propsName]: !oldItem[propsName]};
    }
    
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
          todoData: this.onTodoItemChange(todoData, id, "important")
        }
      });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {

      return {
        todoData: this.onTodoItemChange(todoData, id, "done")
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

    return (
      <div id="ToDoList">
        <ToDoHeader 
          todoData = {todoData}
        />
        <ListItemBox 
          todoData = {todoData}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          deleteItem = {this.deleteItem}
        />
        <AddItem addItem = {this.addItem}/>
      </div>
    );
  }
}
