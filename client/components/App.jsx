import React from 'react'

import Header from './Header'
import Question from './Question'
import Cities from './Cities'
import Info from './Info'
import API from './API'
import Footer from './Footer'
import cities from '../../data/city-info'

export default React.createClass({

getInitialState() {
  return {
    question: null
  }
},

  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Question changeOption={this.changeOption}/>
        <Cities cityData={cities.cities} activeQ={this.state.question} />
      </div>
    )
  },

  changeOption(event) {
    this.setState({
      question: event.target.value
    })
console.log(event.target.value)

  }

})
