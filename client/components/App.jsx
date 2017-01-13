import React from 'react'

import Header from './Header'
import Question from './Question'
import Cities from './Cities'
import Info from './Info'
import Footer from './Footer'
import * as api from './api.js'
import WeatherInfo from './WeatherInfo'

export default React.createClass({

  getInitialState () {
    return {
      dataWeather: []
    }
  },

  componentDidMount () {
    api.getWeather(this.renderDataWeather)
  },

  renderDataWeather (err, dataWeather) {
    this.setState({
      dataWeather: dataWeather
    })
  },


  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Question />
        <Cities />
        <WeatherInfo dataWeather={this.state.dataWeather} />
        <Info />
        <Footer />
      </div>
    )
  }
})
