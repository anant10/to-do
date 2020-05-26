import React from 'react';
import Footer from "./components/Footer"
// import MainContent from "./components/MainContent"
import Header from "./components/Header"
import TodoItem from './components/TodoItem'
import todosData from './util/todosData'

// function App() {
//   const TodoComponent = todosData.map( todo => <TodoItem key={todo.id} item={todo} />)
//   return (
//     <div className='todo-outer-box'>
//      {TodoComponent}
//     </div>
//   );
// }


class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
      // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
      // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
      // this.setState(prevState => {
      //   const updatedTodos = prevState.todos.map( todo =>{
      //       if(todo.id === id){
      //         todo.completed = !todo.completed;
      //       }
      //       return todo;
      //     })

      //     return {
      //       todos: updatedTodos
      //     }
      // })

      this.setState( prevState =>{
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            return {
              ...todo,
              completed : !todo.completed
            }
          }
          return todo
        })

        return {
          todos : updatedTodos
        }
      }

      )
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
      handleChange = {this.handleChange}/>)
      
      return (
          <div className="todo-outer-box">
              {todoItems}
          </div>
      )    
  }
}

export default App