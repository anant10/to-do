import React from 'react'

function Joke(props) {
    return (
        <div className="joke-box">
            <p style={{display: props.question ? "block":"none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "red"}}>Punchline: {props.punch}</p>
        </div>
    )
}
export default Joke