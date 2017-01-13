import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="row">
        {this.props.dataWeather.map(city => {
          return <p>{city.cityName}  {city.temp} </p>
        })}
      </div>
    )
  }
})
