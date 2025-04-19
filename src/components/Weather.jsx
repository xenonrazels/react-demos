import React from 'react'

const Weather = (props) => {
  return (
    <div>Weather
        {props.temperature>=25?<h1>It's Sunny day  </h1>:
        <h1>It's Rainy day  </h1>}
    </div>
  )
}

export default Weather