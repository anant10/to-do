import React from 'react'
import Joke from '../components/Joke'
import JokesData from '../util/JokesData'

function JokeApp(){
const JokeComponent = JokesData.map(joke =>  <Joke key={joke.id} question={joke.question} punch={joke.punch} />)

    return (
    <div>
       {JokeComponent}
    </div>
    )
}

export default JokeApp