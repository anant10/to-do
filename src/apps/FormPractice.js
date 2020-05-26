import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class FormPractice extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            location : "newyork",
            vegetarian : false,
            kosher : false,
            lactosefree : false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type == "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name" 
                        name="firstName" 
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        
                    />
                    <br />
                    <input 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        placeholder="Age" 
                        name="age" 
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender=="male"}
                            onChange = {this.handleChange}
                        /> male
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender=="female"}
                            onChange = {this.handleChange}
                        />female
                    </label>
                    
                    {/* Create select box for location here */}
                    <br />
                    <label /> Location
                    <select 
                        name="location" 
                        value={this.state.location} 
                        onChange = {this.handleChange}
                        >
                        <option value="newyork">New York</option>
                        <option value="chicago">Chicago</option>
                        <option value="boston">Boston</option>
                    </select>
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label /> Type of preferred food
                    <label>
                        <input 
                            type="checkbox"
                            name="vegetarian"
                            onChange={this.handleChange}
                            checked={this.state.vegetarian}
                            /> Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="kosher"
                            onChange={this.handleChange}
                            checked={this.state.kosher}
                            /> Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="lactosefree"
                            onChange={this.handleChange}
                            checked={this.state.lactosefree}
                            /> Lactose Free
                    </label>
                        
                    
                    
                    <button >Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName +" "+ this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: </p>
                <p>Vegetarian : {this.state.vegetarian ? "Yes":"No"}</p>
                <p>Kosher : {this.state.kosher ? "Yes":"No"}</p>
                <p>Lactose Free : {this.state.lactosefree ? "Yes":"No"}</p> 
                        
                    
                
            </main>
        )
    }
}

export default FormPractice
