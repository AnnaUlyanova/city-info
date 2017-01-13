import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="row">
      <div className="col-md-12 api-cl">
        {this.props.dataWeather.map(city => {
          return <p>{city.cityName}  {city.temp} °C </p>
        })}
      </div>
      </div>
    )
  }
})
