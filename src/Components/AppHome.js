import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import SearchTodo from  './SearchTodo'
//import uuid from 'uuid';
import axios from 'axios'


class App extends Component {
  state = {
      todos:[],
      search:'',
      title:''
    }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos:res.data}))
  }

  
  handleSubmit = e => {
    e.preventDefault()

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:this.state.title,
      completed:false
    })
    .then(res => this.setState( ({ todos:this.state.todos.concat(res.data)})) )

    this.setState({title:''})

  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos:this.state.todos.filter(todo => todo.id !== id)}))

  }
  


  render(){
    
    const filterTodos = this.state.todos.filter(todo => {
      return todo.title.indexOf(this.state.search) !== -1
    })

    return (
      <div>
        <div>
          <SearchTodo 
            search={this.state.search} 
            handleChange={this.handleChange} 
          />
          <Todos 
            todos={filterTodos} 
            markComplete={this.markComplete} 
            deleteTodo={this.deleteTodo}
          />
          <AddTodo  
            title={this.state.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>

    )

  }
}

export default App;
