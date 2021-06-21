import React, { Component } from "react";
import axios from "axios";
import Todos from "../components/Todos/Todos";
import AddTodo from "../components/Todos/AddTodo";
import SearchTodo from "../components/Todos/SearchTodo";
import { IHomePage } from "../interfaces/interfaces";

class HomePage extends Component<{}, IHomePage> {
  state: IHomePage = {
    todos: [],
    searchTerm: "",
    searchResults: [],
    editTodo: false,
  };

  //fetch todos from an api server
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }))
      .then(() => console.log(this.state.todos));
  }

  addTodo = (title: string) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({ todos: this.state.todos.concat(res.data) })
      );

    this.setState({
      editTodo: false,
    });
  };

  //toggle todo completed
  markComplete = (id: string | number) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos });
  };

  //delete todo
  deleteTodo = (id: string | number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  };

  updateTodoTitle = (newText: string, id: string | number) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newText,
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  };

  //handle search

  searchKeyword = (text: string) => {
    this.setState({ searchTerm: text });
    const todos = this.state.todos;
    if (text !== "") {
      const filteredTodos = this.state.todos.filter((todo) => {
        return Object.values(todo)
          .join(" ")
          .toLowerCase()
          .includes(text.toLowerCase());
      });
      this.setState({ searchResults: filteredTodos });
    } else {
      this.setState({ searchResults: todos });
    }
  };

  render() {
    return (
      <div>
        <SearchTodo searchKeyword={this.searchKeyword} />
        <Todos
          todos={
            this.state.searchTerm.length < 1
              ? this.state.todos
              : this.state.searchResults
          }
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          updateTodoTitle={this.updateTodoTitle}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default HomePage;
