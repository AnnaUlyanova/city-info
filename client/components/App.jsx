import React from 'react'

import Header from './Header'
import Question from './Question'
import Cities from './Cities'
import Info from './Info'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Question />
        <Cities />
        <Info />
        <Footer />
      </div>
    )
  }
})
