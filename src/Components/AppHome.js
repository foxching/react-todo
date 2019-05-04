import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
      todos:[{
        id:uuid(),
        title:'Trowh trash',
        completed:false
      },{
        id:uuid(),
        title:'Coding',
        completed:true
      },{
        id:uuid(),
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
  
  addTodo = (title) => {

    const newTodo = {  
      id:uuid(),
      title,
      completed:false
    }

    this.setState( ({ todos:this.state.todos.concat(newTodo)}))

  }
  render(){
    
    return (
      <div>
        <div>
          <AddTodo  addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>

    )

  }
}

export default App;
