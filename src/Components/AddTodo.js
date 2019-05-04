import React, { Component } from 'react'


class AddTodo extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({ title:''});
    }

    onChange = (e) => {
        this.setState({ [e.target.name]:e.target.value})
    }


    render(){

        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add Todo...."
                        style={{ padding:'10px', flex:'10'}}
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                        style={{flex:'1'}}
                        className="btn"
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo;