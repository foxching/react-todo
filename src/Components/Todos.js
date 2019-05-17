import React, {Component} from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types'


class Todos extends Component {
  state ={
    search:''
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({search:e.target.value})
  }



  render(){
   
    const filterTodos = this.props.todos.filter(todo => {
      return todo.title.indexOf(this.state.search) !== -1
    })

    return (
      <div>
          <div style={{display:'flex'}}>
                <input 
                    type="text" value={this.state.search}  
                    style={{padding:'10px', flex:'2'}} 
                    onChange={this.onChange}
                    placeholder="Search Todo here......"
                />
          </div>
          <div>
            {filterTodos.length === 0 && <p style={{padding:'10px', fontSize:'15px'}}>No todos found!!</p>}

            {
                filterTodos.map((todo) => (
                <Todo 
                  key={todo.id} 
                  todo={todo} 
                  markComplete={this.props.markComplete} 
                  deleteTodo={this.props.deleteTodo}
                  />
              ))  
            }

          </div>
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