import React from 'react'

import Header from './Header'
import Question from './Question'
import Cities from './Cities'
import Info from './Info'
import API from './API'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Question />
        <Cities />
        <Info />
        <API />
        <Footer />
      </div>
    )
  }
})
