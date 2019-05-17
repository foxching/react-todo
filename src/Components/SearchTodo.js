import React, { Component } from 'react'


class SearchTodo extends Component {
    state={
        search:''
    }

    onChange = (e) => {
        
        e.preventDefault()
        this.props.filterTodos(this.state.search)
        this.setState({search:e.target.value})
    }

    render(){
        
        return (
            <div style={{display:'flex'}}>
                <input 
                    type="text" value={this.state.search}  
                    style={{padding:'10px', flexGrow:'1'}} 
                    onChange={this.onChange}
                    placeholder="Search Todo here......"
                />
            </div>
        );
    }

}

export default SearchTodo