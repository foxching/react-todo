import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchTodo extends Component {
  render() {
    const { search, handleChange } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          name="search"
          style={{ padding: '10px', flexGrow: '1' }}
          value={search}
          onChange={handleChange}
          placeholder="Search Todo here......"
        />
      </div>
    );
  }
}

SearchTodo.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchTodo;
