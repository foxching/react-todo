import React, { Component } from 'react';
import Todos from './Todos'

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
      }]
    }
  render(){
    
    return (
      <div>
        <Todos todos={this.state.todos}/>
      </div>

    )

  }
}

export default App;
