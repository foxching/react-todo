import React, { Component } from "react";
import { ITodo } from "../../interfaces/interfaces";

class TodoItem extends Component<ITodo, { editing: boolean }> {
  state = {
    editing: false,
  };

  inputRef = React.createRef<HTMLInputElement>();

  componentDidUpdate() {
    let text: any;
    if (this.state.editing) {
      text = this.inputRef.current;
      text.focus();
      text.select();
    }
  }

  edit = () => {
    this.setState({ editing: true });
  };

  cancelEdit = () => {
    this.setState({ editing: false });
  };

  handleSave = (e: any) => {
    e.preventDefault();
    this.props.updateTodoTitle(this.inputRef.current.value, this.props.todo.id);
    this.setState({
      editing: false,
    });
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
    };
  };

  renderDisplay = () => {
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={(e) => this.props.markComplete(this.props.todo.id)}
          checked={!!this.props.todo.completed}
        />
        {""}
        {this.props.todo.title}
        <button
          className="danger"
          onClick={(e) => this.props.deleteTodo(this.props.todo.id)}
        >
          <i className="fas fa-trash" />
        </button>
        <button className="success" onClick={this.edit}>
          <i className="fas fa-pen" />
        </button>
      </div>
    );
  };

  renderEditForm = () => {
    return (
      <div style={this.getStyle()}>
        <form onSubmit={this.handleSave} style={{ display: "flex" }}>
          <input
            type="text"
            ref={this.inputRef}
            defaultValue={this.props.todo.title}
            style={{ flex: "10" }}
          />
          <button
            type="submit"
            style={{ padding: "5px", cursor: "pointer", margin: "1px" }}
          >
            <i className="fas fa-check" />
          </button>
          <button
            onClick={this.cancelEdit}
            style={{ padding: "5px", cursor: "pointer", margin: "1px" }}
          >
            <i className="fas fa-backspace" />
          </button>
        </form>
      </div>
    );
  };

  render() {
    return this.state.editing ? this.renderEditForm() : this.renderDisplay();
  }
}

export default TodoItem;
