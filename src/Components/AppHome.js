import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
//import uuid from 'uuid';
import axios from 'axios'


class App extends Component {
  state = {
      todos:[]
    }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos:res.data}))
  }

  markComplete = (id) => {
    const todos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState( ({ todos }))
  }

  deleteTodo = (id) => {
    
    //const todos= this.state.todos.filter(todo => todo.id !== id)
    //this.setState(({ todos }))

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos:this.state.todos.filter(todo => todo.id !== id)}))

  }
  
  addTodo = (title) => {

    // const newTodo = {  
    //   id:uuid(),
    //   title,
    //   completed:false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
    .then(res => this.setState( ({ todos:this.state.todos.concat(res.data)})) )

  }

  render(){

    return (
      <div>
        <div>
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            deleteTodo={this.deleteTodo}
          />
          <AddTodo  addTodo={this.addTodo}/>
        </div>
      </div>

    )

  }
}

export default App;
