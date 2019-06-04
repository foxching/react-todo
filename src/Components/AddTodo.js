import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  render() {
    const { title, handleChange, handleSubmit, editTodo } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo here...."
            style={{ padding: '10px', flex: '10' }}
            value={title}
            onChange={handleChange}
          />
          <input
            type="submit"
            value={editTodo ? 'Edit' : 'Add'}
            style={{ flex: '1' }}
            className="btn"
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  title: PropTypes.string.isRequired,
  editTodo: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddTodo;
