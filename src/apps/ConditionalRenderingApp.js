import React from 'react'
import Conditional from '../components/Conditional'

class ConditionalRenderingApp extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading : true
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState(this.state = {isLoading:false})},
            1500
            )
    }
    
    render(){
        
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
            </div>
        )
    }
}

export default ConditionalRenderingApp