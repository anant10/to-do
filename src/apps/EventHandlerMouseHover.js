import React from "react"

function handleClick() {
    console.log("I was clicked")
}
function mouseHover() {
    console.log("hover")
}

// https://reactjs.org/docs/events.html#supported-events

function EventHandlerMouseHover() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100" onMouseOver={mouseHover}/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandlerMouseHover
