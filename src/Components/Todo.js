import React, { Component } from 'react'

class Todo extends Component {
		
	getStyle = () => {
		return {
			textDecoration:this.props.todo.completed ? 'line-through' : 'none',
			padding:'10px',
			background:'#f4f4f4',
			borderBottom:'1px #ccc dotted'
		}
	}

	render(){
		return(
			<div style={this.getStyle()}>
				<input type="checkbox" />{''}
				{this.props.todo.title}
			</div>


		)
	}
}

export default Todo;