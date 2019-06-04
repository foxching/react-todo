import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  state = {
    editing: false
  };

  componentDidUpdate() {
    let text;
    if (this.state.editing) {
      text = this._newText;
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

  handleSave = e => {
    e.preventDefault();
    this.props.updateTodo(this._newText.value, this.props.todo.id);
    this.setState({
      editing: false
    });
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '10px',
      background: '#f4f4f4',
      borderBottom: '1px #ccc dotted'
    };
  };

  renderDisplay = () => {
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={e => this.props.markComplete(this.props.todo.id)}
          checked={!!this.props.todo.completed}
        />
        {''}
        {this.props.todo.title}
        <button
          style={btnStyle2}
          onClick={e => this.props.handleDeleteTodo(this.props.todo.id)}
        >
          <i className="fas fa-trash" />
        </button>
        <button style={btnStyle1} onClick={this.edit}>
          <i className="fas fa-pen" />
        </button>
      </div>
    );
  };

  renderEditForm = () => {
    return (
      <div style={this.getStyle()}>
        <form onSubmit={this.handleSave} style={{ display: 'flex' }}>
          <input
            type="text"
            ref={input => (this._newText = input)}
            defaultValue={this.props.todo.title}
            style={{ flex: '10' }}
          />
          <button
            type="submit"
            style={{ padding: '5px', cursor: 'pointer', margin: '1px' }}
          >
            <i className="fas fa-check" />
          </button>
          <button
            onClick={this.cancelEdit}
            style={{ padding: '5px', cursor: 'pointer', margin: '1px' }}
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

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
};

const btnStyle1 = {
  color: '#008000',
  background: '#f4f4f4',
  border: 'none',
  padding: '5px 9px',
  float: 'right',
  cursor: 'pointer'
};
const btnStyle2 = {
  color: '#FF0000',
  background: '#f4f4f4',
  border: 'none',
  padding: '5px 9px',
  float: 'right',
  cursor: 'pointer'
};

export default Todo;
