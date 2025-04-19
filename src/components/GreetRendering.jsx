import React from 'react'

const GreetRendering = (props) => {
  return (
    <div>
        <h1>GreetRendering</h1>
        {props.time === "Morning" ? <h1>Good Morning</h1> : props.time==="Afternoon" ?<h2>Good Afternoon</h2>: <h3>Good Evening</h3>}

    </div>
  )
}
export default GreetRendering