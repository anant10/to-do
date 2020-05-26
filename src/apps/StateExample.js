import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class StateExample extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"Mr. Winklewoss",
            age:"28"
        }
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
    )
    }
        
}

export default StateExample
