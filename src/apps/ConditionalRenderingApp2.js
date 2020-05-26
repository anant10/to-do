import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class ConditionalRenderingApp2 extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
        this.changeLoggedStatus = this.changeLoggedStatus.bind(this)
    }
    
    changeLoggedStatus(){
        // const out = this.state.isLoggedIn ? false : true
        // this.setState(
        //     this.state = {
        //     isLoggedIn : this.state.isLoggedIn ? false : true
        //     })

        this.setState( prevState => {
            
            return { isLoggedIn : !prevState.isLoggedIn}
        })
    }
    
    render() {
        const displayText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        return (
             <div>
                <h1>User is logged {this.state.isLoggedIn ? "in" : "out" } </h1>
                <button type="button" onClick ={this.changeLoggedStatus} >{displayText}</button>
            </div>
        )
       
    }
}

export default ConditionalRenderingApp2
