import React, { Component } from "react";
import { IAddTodo } from "../../interfaces/interfaces";

class AddTodo extends React.Component<IAddTodo, { title: string }> {
  state = {
    title: "",
  };

  //handle todo input change
  handleChange = (e: any) => {
    this.setState({ title: e.target.value });
  };

  //handle add todo
  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.title.trim().length === 0) {
      return;
    }
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Add Todo here...."
            style={{ padding: "10px", flex: "10" }}
          />
          <input
            type="submit"
            value={"Add"}
            style={{ flex: "1" }}
            className="add-btn"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
