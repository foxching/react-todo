import React, { Component } from "react";
import axios from "axios";
import Todos from "../components/Todos/Todos";
import AddTodo from "../components/Todos/AddTodo";
import SearchTodo from "../components/Todos/SearchTodo";

class HomePage extends Component {
  state = {
    todos: [],
    search: "",
    title: "",
    editTodo: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: this.state.title,
        completed: false,
      })
      .then((res) =>
        this.setState({ todos: this.state.todos.concat(res.data) })
      );

    this.setState({
      title: "",
      editTodo: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  markComplete = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos });
  };

  handleDeleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  };

  updateTodo = (newText, id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newText,
        };
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  };

  render() {
    const filterTodos = this.state.todos.filter((todo) => {
      return todo.title.indexOf(this.state.search) !== -1;
    });

    return (
      <div>
        <div>
          <SearchTodo
            search={this.state.search}
            handleChange={this.handleChange}
          />
          <Todos
            todos={filterTodos}
            markComplete={this.markComplete}
            handleDeleteTodo={this.handleDeleteTodo}
            updateTodo={this.updateTodo}
          />
          <AddTodo
            title={this.state.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editTodo={this.state.editTodo}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
