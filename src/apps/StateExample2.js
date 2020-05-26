import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class StateExample2 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:true
        }
    }
    render(){
        let wordDisplay
        if(this.state.isLoggedIn === true){
            wordDisplay = "in"
        }
        else{
            wordDisplay = "out"
        }
        return (
            <div>
                {/* this also works// <h1>You are currently logged {this.state.isLoggedIn==true ? "in" : "out"}</h1> */}
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
    
}

export default StateExample2
