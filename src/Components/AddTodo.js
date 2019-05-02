import React, { Component } from 'react'


class AddTodo extends Component {

    render(){

        return (
            <div>
                <form style={{display:'flex'}}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add Todo"
                        style={{ padding:'10px', flex:'10'}}
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