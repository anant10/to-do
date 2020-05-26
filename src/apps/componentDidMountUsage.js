import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class componentDidMountUsage extends Component {
    constructor(){
        super()
        this.state = {
            loading : false,
            character : {}
        }
    }
    
    componentDidMount(){
        this.setState({loading : true})
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json() )
        .then(data => 
                {this.setState(
                    {
                        loading : false,
                        character : data
                    })
                })
    }
    
    render(){
        const text = this.state.loading ? "LOADING..." : this.state.character.title
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default componentDidMountUsage
