import React, { Component } from 'react';
import Todos from './Todos'
import Header from './Layouts/Header'
import AddTodo from './AddTodo';

class App extends Component {
  state = {
      todos:[{
        id:1,
        title:'Trowh trash',
        completed:false
      },{
        id:2,
        title:'Coding',
        completed:true
      },{
        id:3,
        title:'Sex',
        completed:true
      }]
    }
  
  markComplete = (id) => {
    const todos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState( ({ todos:todos}))
  }

  deleteTodo = (id) => {
    const todos= this.state.todos.filter(todo => todo.id !== id)

    this.setState(({ todos }))
  }
  
  render(){
    
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>

    )

  }
}

export default App;
