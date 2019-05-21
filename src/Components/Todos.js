import React, {Component} from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types'


class Todos extends Component {
  
  render(){
    
    const { todos, markComplete, handleDeleteTodo, updateTodo} = this.props

    return (
      <div>
            {todos.length === 0 && <p style={{padding:'10px', fontSize:'15px'}}>No todos found!!</p>}

            {
                todos.map((todo) => (
                <Todo 
                  key={todo.id} 
                  todo={todo} 
                  markComplete={markComplete} 
                  handleDeleteTodo={handleDeleteTodo}
                  updateTodo={updateTodo}
                />
              ))  
            }
        
      </div>


    )

  }
}

Todos.propTypes = {
  todos:PropTypes.array.isRequired,
  markComplete:PropTypes.func.isRequired,
  handleDeleteTodo:PropTypes.func.isRequired,
  updateTodo:PropTypes.func.isRequired
}


export default Todos