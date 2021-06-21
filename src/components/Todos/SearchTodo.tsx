import React, { Component } from "react";
import { ISearchTodo } from "../../interfaces/interfaces";

class SearchTodo extends Component<ISearchTodo, {}> {
  inputRef = React.createRef<HTMLInputElement>();

  getSearchTerm = () => {
    this.props.searchKeyword(this.inputRef.current.value);
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          name="search"
          ref={this.inputRef}
          onChange={this.getSearchTerm}
          style={{ padding: "10px", flexGrow: 1 }}
          placeholder="Search Todo here......"
        />
      </div>
    );
  }
}

export default SearchTodo;
