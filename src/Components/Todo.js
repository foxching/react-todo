import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
		const {markComplete, deleteTodo} = this.props
		
		return(
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={(e) => markComplete(id)} checked={!!completed}/>{''}
				 {title}
				<button style={btnStyle2} onClick={(e) => deleteTodo(id)}><i className="fas fa-trash"></i></button>
				<button style={btnStyle1} onClick={(e) => deleteTodo(id)}><i className="fas fa-pen"></i></button>	
			</div>


		)
	}
}


Todo.propTypes = {
	todo:PropTypes.object.isRequired,
	markComplete:PropTypes.func.isRequired,
	deleteTodo:PropTypes.func.isRequired
  }

const btnStyle1 = {
	color:'#008000',
	background:'#f4f4f4',
	border:'none',
	padding:'5px 9px',
	float:'right',
	cursor:'pointer'
}
const btnStyle2 = {
	color:'#FF0000',
	background:'#f4f4f4',
	border:'none',
	padding:'5px 9px',
	float:'right',
	cursor:'pointer'
}

export default Todo;
