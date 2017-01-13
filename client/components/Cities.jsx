import React from 'react'

import City from './City'

export default React.createClass({

  render () {
    return (
      <div className='container'>
          <div className="row">
          {this.props.cityData.map((city) => {
            return <City
            key = {city.id}
            info = {city}
            question = {this.props.activeQ}/>
          })}

          </div>
      </div>


    )
  }
})
