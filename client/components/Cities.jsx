import React from 'react'

import cities from '../../data/city-info.js'

export default React.createClass({

  getInitialState() {
    return cities

  },

  render () {
    return (
      <div className='container'>
          <div className="row">
              <div className="col-md-3">
                  <img src='http://placekitten.com/g/250/250' />
                  <h2>{this.state.cities[0].id}</h2>
              </div>
              <div className="col-md-3">
                  <img src='http://placekitten.com/g/250/250' />
                  <h2>{this.state.cities[1].id}</h2>
              </div>
              <div className="col-md-3">
                <img src='http://placekitten.com/g/250/250' />
                <h2>{this.state.cities[2].id}</h2>
              </div>
              <div className="col-md-3">
                <img src='http://placekitten.com/g/250/250' />
                <h2>{this.state.cities[3].id}</h2>
              </div>
          </div>

      </div>
    )
  }
})
