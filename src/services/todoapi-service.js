export default class TodoApiService {
  todoData = [
      {id: 1, label: "Make Awesome App", important: false, done: false},
      {id: 2, label: "Learn React", important: false, done: false},
      {id: 3, label: "Have a Lunch", important: false, done: false}
    ]


  getAllTodoData = async () => {
    return this.todoData;
  }
}

