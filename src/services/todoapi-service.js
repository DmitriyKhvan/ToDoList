export default class TodoApiService {
  
  _apiBase = "https://jsonplaceholder.typicode.com";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok){
      throw new Error(`Could not fetch ${url}` +
      ` received ${res.status}`);
    }

    return await res.json();
  }


  getAllTodoData = async () => {
    const res = await this.getResource(`/todos/`);
    return res.map(this._transformTodoItem).slice(0, 5);
  }


  _transformTodoItem = (item) => {
    return {
      id: item.id,
      label: item.title,
      important: false,
      done: item.completed
    }
  }
}

