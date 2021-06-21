export interface ITodoObj {
  id: string | number;
  title: string;
  completed: boolean;
}

export interface IHomePage {
  todos: ITodoObj[];
  editTodo: boolean;
  searchTerm: string;
  searchResults: ITodoObj[];
}

export interface IAddTodo {
  addTodo(title: string): void;
}

export interface ISearchTodo {
  searchKeyword(text: string): void;
}

export interface ITodo {
  todo: ITodoObj;
  markComplete(id: string | number): void;
  deleteTodo(id: string | number): void;
  updateTodoTitle(newText: string, id: string | number): void;
}

export interface ITodos {
  todos: ITodoObj[];
  markComplete(id: string | number): void;
  deleteTodo(id: string | number): void;
  updateTodoTitle(newText: string, id: string | number): void;
}

export interface ITodoItem {
  editing: boolean;
}
