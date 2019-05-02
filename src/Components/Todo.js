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
		const { id, title, completed} = this.props.todo
		
		return(
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={(e) => this.props.markComplete(id)} checked={!!completed}/>{''}
				{title}
				<button style={btnStyle} onClick={(e) => this.props.deleteTodo(id)}>X</button>
			</div>


		)
	}
}

const btnStyle = {
	background:'#ff0000',
	color:'#fff',
	border:'none',
	padding:'5px 9px',
	borderRadius:'50%',
	float:'right',
	cursor:'pointer'
}

export default Todo;
