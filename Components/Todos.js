import React, {Component} from 'react';

class Todos extends Component {

  render(){

    return (
      <div>
        {this.props.todos.map((todo) => (
          <p>{todo.title}</p>
        ))}
      </div>

    )

  }
}

export default Todos;
