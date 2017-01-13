import React from 'react'

import Header from './Header'
import Question from './Question'
import Cities from './Cities'
import * as api from './api.js'
import WeatherInfo from './WeatherInfo'
import cities from '../../data/city-info'

export default React.createClass({

  getInitialState () {
    return {
      dataWeather: [],
      question: null
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
        <Question changeOption={this.changeOption}/>
        <Cities cityData={cities.cities} activeQ={this.state.question} />
        <WeatherInfo dataWeather={this.state.dataWeather} />
      </div>
    )
  },

  changeOption(event) {
    this.setState({
      question: event.target.value
    })
  }

})
