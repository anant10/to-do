import React, {Component} from "react"


class ReactForms1 extends Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            isFriendly : true,
            gender : "",
            favColor : "blue",
            submit : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type=="checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }
    
    // handleClick(event){
        
    // }
    
    render(){
        return(
            <div className = "form-background">
                <div className="form-outer-box">
                <input 
                    type="text" 
                    name = "firstName"
                    value = {this.state.firstName}
                    placeholder="First Name" 
                    onChange={this.handleChange}>
                </input>
                <br />
                <input 
                    type="text" 
                    name = "lastName"
                    value = {this.state.lastName}
                    placeholder="Last Name" 
                    onChange={this.handleChange}>
                </input>
                <br />
                <textarea 
                    name="text" 
                    placeholder="Type your text here..."
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly" 
                        checked={this.state.isFriendly} 
                        onChange = {this.handleChange}
                    /> Is friendly ?
                </label> 
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male"
                        checked={this.state.gender === "male"} 
                        onChange = {this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked={this.state.gender === "female"} 
                        onChange = {this.handleChange}
                    /> Female
                </label>
                <br />
                <label /> Select your favorite color 
                <select 
                    name="favColor" 
                    value={this.state.favColor} 
                    onChange={this.handleChange}
                    >
                        <option value="blue"> Blue </option>
                        <option value="green"> Green </option>
                        <option value="red"> Red </option>
                        <option value="yellow"> Yellow </option>
                        <option value="grey"> Grey </option>
                </select>
                <br />
                <button name="submit" 
                    value={this.state.submit} 
                    onClick = {this.handleChange}
                    >Submit
                </button>
                </div>
                <div className="form-outer-console-box">
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p> this is checked {this.state.isFriendly ? "true" : "false"}</p>
                <p>gender is {this.state.gender}</p>
                <p> your favorite color is {this.state.favColor}</p>
                <p> submit {this.state.submit ? "true" : "false"} </p>
                </div>
            </div>
        )
    }
}




export default ReactForms1
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 />
                
//                 {
//                     /**
//                      * Other useful form elements:
//                      * 
//                      *  <textarea /> element
//                      *  <input type="checkbox" />
//                      *  <input type="radio" />
//                      *  <select> and <option> elements
//                      */
//                 }
                
//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
                
//                 <br />
                
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />
                
//                 <label>Favorite Color:</label>
//                 <select 
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
                
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default App
