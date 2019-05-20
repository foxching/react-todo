import React, { Component } from 'react'


class SearchTodo extends Component {
 

    render(){
        
        return (
            <div style={{display:'flex'}}>
                <input 
                    type="text"
                    name="search"
                    style={{padding:'10px', flexGrow:'1'}} 
                    value={this.props.search}
                    onChange={this.props.handleChange}
                    placeholder="Search Todo here......"
                />
            </div>
        );
    }

}

export default SearchTodo