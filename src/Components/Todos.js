import React, {Component} from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types'


class Todos extends Component {

  render(){
   
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ))}
      </div>

    )

  }
}

Todos.propTypes = {
  todos:PropTypes.array.isRequired,
  markComplete:PropTypes.func.isRequired,
  deleteTodo:PropTypes.func.isRequired
}


export default Todos