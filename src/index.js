import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import App from './App';
import ContactApp from './apps/ContactApp'
import JokeApp from './apps/JokeApp'
import StateExample from './apps/StateExample'
import StateExample2 from './apps/StateExample2'
import EventHandlerMouseHover from './apps/EventHandlerMouseHover'
import ConditionalRenderingApp from './apps/ConditionalRenderingApp'
import ConditionalRenderingApp2 from './apps/ConditionalRenderingApp2'
import componentDidMountUsage from './apps/componentDidMountUsage'
import ReactForms1 from './apps/ReactForms1'
import FormPractice from './apps/FormPractice'
import * as serviceWorker from './serviceWorker';
// import MyInfo from "./components/MyInfo"

// function MyApp() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfTheDay
//   const styles = {
//     color : "red",
//     fontSize: 20
//   }
//   if (hours < 12){
//     timeOfTheDay = "Morning"
//     styles.backgroundColor = "orange"
//   }
//   else if (hours>=12 && hours<17){
//     timeOfTheDay = "Evening"
//     styles.backgroundColor = "yellow"
//   }
//   else{
//     timeOfTheDay = "Night"
//     styles.backgroundColor = "red"
//   }

  
//   return (
//     <h1 style={styles}>Good {timeOfTheDay}!</h1>
//   )
// }
ReactDOM.render(<FormPractice /> , document.getElementById("root"));
// ReactDOM.render(<App /> , document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
